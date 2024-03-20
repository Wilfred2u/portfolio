import { Outlet } from "react-router-dom";

const Props = () => {
    return (
        <>
            <section className="bgmediumgrey width80percent divhorizontalcentered mediumpaddingtop mediummpaddingbottom ">
                <h4 className="smallmarginbottom" id="props">props</h4>
                <hr className="width100percent smallmarginbottom" />
                <p className="largemarginbottom">
                    Props stellen je in staat om gegevens door te geven van de ene naar de andere component binnen React.
                    Op die manier zijn de componenten modulair en herbruikbaar. De waarde van een prop is onveranderlijk,
                    deze kan niet worden aangepast.
                </p>
                <hr className="width100percent mediummarginbottom" />
                <Outlet />
            </section >
        </>
    );
};

export default Props;