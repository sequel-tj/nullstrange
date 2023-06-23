import React from 'react'

const servicesSection: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '100vh',
    background: 'rgb(51,51,51)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    // border: '1px solid red',
};

const serviceContainer: React.CSSProperties = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // background: 'violet',
};

const servicesHeader: React.CSSProperties = {
    width: '21rem',
    fontSize: '3rem',
    background: 'white',
    color: 'black',
    textAlign: 'center',
    borderRadius: '15px',
    // boxShadow: '#0000003a 5px 5px 15px',
    boxShadow: 'rgb(228 69 200 / 80%) 0px 0px 25px 0px',
};

const servicesFlexbox: React.CSSProperties = {
    width: '95%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // border: '1px solid white',
};

const servicesCard: React.CSSProperties = {
    padding: '10px',
    width: '400px',
    height: '500px',
    border: '1px solid white',
    overflow: 'hidden',
    boxShadow: '#ffffff3a 5px 5px 15px',
};

const servicesImg: React.CSSProperties = {

};

const Services = () => {
    return(
        <div className="servicesContainer" style={servicesSection}>
            <div className="serviceContainer" style={serviceContainer}>
                <h1 style={servicesHeader}>OUR SERVICES</h1>

                <div className="servicesFlexbox" style={servicesFlexbox}>
                    <div className="services" style={servicesCard}>
                        <img width={'100%'} height={'226px'} style={servicesImg} src={require("../images/services1.webp")} alt={"service1-img"} />
                        <h3 style={{fontSize: '2rem', padding: '4px'}}>Composition</h3>
                        <p style={{width: '95%', fontSize: '1.2rem'}}>Provide music arrangements and composition for your song according to the taste and genre you prefer. And additionally Mixing and Mastering (optional if opted) too of your song.</p>
                    </div>
                    <div className="services" style={servicesCard}>
                        <img width={'100%'} height={'226px'} style={servicesImg} src={require("../images/services2.jpg")} alt={"service2-img"} />
                        <h3 style={{ fontSize: '2rem', padding: '4px' }}>Mixing</h3>
                        <p style={{width: '95%', fontSize: '1.2rem'}}>Provides mixing service to make your song better with the STEMS provided. Here you will get to alter your mix according to your preference and liking. We take your suggestions and do what suits you best.</p>
                    </div>
                    <div className="services" style={servicesCard}>
                        <img width={'100%'} height={'226px'} style={servicesImg} src={require("../images/services3.webp")} alt={"service3-img"} />
                        <h3 style={{ fontSize: '2rem', padding: '4px'}}>Mastering</h3>
                        <p style={{width: '95%', fontSize: '1.2rem'}}>Provides mastering service to make your song stand apart and stand clear and loud as per the required LUFS and True Peak. The audio quality will be not less then any industry standard norms.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;