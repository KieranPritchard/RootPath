// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import fs from "node:fs"
import * as path from "node:path"

interface CheckResult {
  url: string
  status: number | null
  live: boolean
  error?: string
}

async function checkUrl(url: string): Promise<CheckResult> {
  try {
    let response = await fetch(url, {
      method: "HEAD",
      signal: AbortSignal.timeout(5000),
    })

    if (response.status === 405 || response.status === 403) {
      response = await fetch(url, {
        method: "GET",
        signal: AbortSignal.timeout(5000),
      })
    }

    if (response.ok) {
      return { url, status: response.status, live: true }
    } else {
      return {
        url,
        status: response.status,
        live: false,
        error: `HTTP ${response.status}`,
      }
    }
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error)
    return { url, status: null, live: false, error: errorMessage }
  }
}

async function validateLinksFromFile(): Promise<void> {
  const filePath = path.resolve(process.cwd(), "src/links.tsx")

  if (!fs.existsSync(filePath)) {
    console.error(`Error: Could not find file at ${filePath}`)
    process.exit(1)
  }

  const fileContent = fs.readFileSync(filePath, "utf-8")

  // Extract all http(s) URLs inside quotes
  const urlRegex = /["'](https?:\/\/[^"']+)["']/g
  const urls: string[] = []
  let match: RegExpExecArray | null

  while ((match = urlRegex.exec(fileContent)) !== null) {
    urls.push(match[1])
  }

  // Deduplicate URLs without spread operator
  const uniqueUrls = Array.from(new Set(urls))

  if (uniqueUrls.length === 0) {
    console.log("No HTTP/HTTPS links found to test.")
    return
  }

  console.log(
    `Found ${uniqueUrls.length} unique web links to validate in src/links.tsx...\n`
  )

  const results = await Promise.all(uniqueUrls.map((url) => checkUrl(url)))

  let passCount = 0
  let failCount = 0

  results.forEach(({ url, status, live, error }) => {
    if (live) {
      console.log(`\x1b[32m[PASS]\x1b[0m ${url} [${status}]`)
      passCount++
    } else {
      console.log(`\x1b[31m[FAIL]\x1b[0m ${url} - ${error}`)
      failCount++
    }
  })

  console.log(`\nResults: ${passCount} live | ${failCount} dead`)

  if (failCount > 0) {
    process.exit(1)
  }
}

void validateLinksFromFile()
