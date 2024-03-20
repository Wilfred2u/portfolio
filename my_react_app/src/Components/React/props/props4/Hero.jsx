import hero from "../Images/photo-grid.png";

const Hero = () => {
    return (
        <section className="props_hero">
            <img src={hero} className="props_hero_photo" alt="hero" />
            <h1 className="darkgrey props_hero_title poppins">Online Experiences</h1>
            <p className="darkgrey props_hero_text poppins">Join unique interactive activities led by one-of-a-kind hosts - all without leaving home.</p>
        </section>
    )
};

export default Hero;