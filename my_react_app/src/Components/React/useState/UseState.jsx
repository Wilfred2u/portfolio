import { Outlet } from "react-router-dom";

const UseState = () => {
    return (
        <>
            <section className="bgmediumgrey width80percent divhorizontalcentered mediumpaddingtop mediummpaddingbottom ">
                <h4 className="smallmarginbottom" id="usestate">useState</h4>
                <hr className="width100percent smallmarginbottom" />

                <p className="largemarginbottom">
                    Om de staat in een component bij te houden, gebruiken we <span
                        className="code lightyellow">useState</span>. <span
                            className="code lightyellow">useState</span> heeft een beginstaat en retourneert twee waarden:
                </p>
                <ol className="largemarginbottom">
                    <li>de huidige staat;</li>
                    <li>een functie welke de staat vernieuwt.</li>
                </ol>
                <hr className="width100percent mediummarginbottom" />
                <Outlet />
            </section >

        </>
    );
};

export default UseState;