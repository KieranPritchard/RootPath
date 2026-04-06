import ContentBackground from "./components/Background/ContentBackground"
import About from "./components/Bio/About"
import PersonalBio from "./components/Bio/PersonalBio"


export function App() {
  return (
    <>
      <div className="min-h-screen p-4">
        <ContentBackground>
          <div className="className='flex flex-col justify-center max-w-screen-xl mx-auto'">
            <PersonalBio />
            <About />
          </div>
        </ContentBackground>
      </div>
    </>
  )
}

export default App
