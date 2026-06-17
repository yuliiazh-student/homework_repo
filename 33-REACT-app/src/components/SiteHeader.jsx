export default function SiteHeader(props) {
    return (
        <>
            <header>
                <div className="container">
                    <div id="logo">
                        <a href="#">

                        </a>
                    </div>
                    {props.children}
                </div>
            </header>
        </>
    )
}
