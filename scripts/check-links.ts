// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import fs from "node:fs"
import * as path from "node:path"

// Type to store the check result
interface CheckResult {
  url: string
  status: number | null
  live: boolean
  error?: string
}

// Function to check the url
async function checkUrl(url: string): Promise<CheckResult> {
  try {
    // Gets the response from fetching the url
    let response:Response = await fetch(url, {
      method: "HEAD",
      signal: AbortSignal.timeout(5000),
    })

    // Checks for denied or not found statuses
    if (response.status === 405 || response.status === 403) {
      response = await fetch(url, {
        method: "GET",
        signal: AbortSignal.timeout(5000),
      })
    }

    // Checks if the response is ok
    if (response.ok) {
      // Returns the link object
      return { url, status: response.status, live: true }
    } else {
      // Returns the object with errors
      return {
        url,
        status: response.status,
        live: false,
        error: `HTTP ${response.status}`,
      }
    }
  } catch (error: unknown) {
    // Generates an error message
    const errorMessage:string = error instanceof Error ? error.message : String(error)
    return { url, status: null, live: false, error: errorMessage }
  }
}

// Function to validate links from file
async function validateLinksFromFile(): Promise<void> {
  // Stores the file path
  const filePath:string = path.resolve(process.cwd(), "src/links.tsx")

  // Checks if the file exists
  if (!fs.existsSync(filePath)) {
    console.error(`Error: Could not find file at ${filePath}`)
    process.exit(1)
  }

  // Stores the file content
  const fileContent = fs.readFileSync(filePath, "utf-8")

  // Extract all http(s) URLs inside quotes
  const urlRegex = /["'](https?:\/\/[^"']+)["']/g
  const urls: string[] = []
  let match: RegExpExecArray | null

  // Adds each of the urls to it
  while ((match = urlRegex.exec(fileContent)) !== null) {
    urls.push(match[1])
  }

  // Deduplicate URLs without spread operator
  const uniqueUrls = Array.from(new Set(urls))

  // CHecks if there are urls
  if (uniqueUrls.length === 0) {
    console.log("No HTTP/HTTPS links found to test.")
    return
  }

  console.log(
    `Found ${uniqueUrls.length} unique web links to validate in src/links.tsx...\n`
  )

  // Stores the results
  const results:CheckResult[] = await Promise.all(uniqueUrls.map((url:string):Promise<CheckResult> => checkUrl(url)))

  // Stores the pass/fail count
  let passCount:number = 0
  let failCount:number = 0

  // Loops over the urls
  results.forEach(({ url, status, live, error }:CheckResult):void => {
    // Skips urls that I know work but register as failed
    if (
      url === "https://www.linkedin.com/in/kieran-pritchard" ||
      url === "https://..."
    ) {
      return
    }

    // Checks what is live
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
