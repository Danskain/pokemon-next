import Background  from "../components/background/index"
import Section from "../components/Section"


function HomePage() {
    return (
        <div>
            <div id="container">
                <Section />
                <Section />
                <Section />
            </div>

            <Background />
        </div>
    )
}


export default HomePage