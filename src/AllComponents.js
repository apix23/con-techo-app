import React from 'react'
import './AllComponents.css'
import CheckmarksCard from './Components/CheckmarksCard'
import ContactForm from './Components/ContactForm'
import FilterItem from './Components/FilterItem'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Pagination from './Components/Pagination'
import PrimaryButton from './Components/PrimaryButton'
import SecondaryOrangeButton from './Components/SecondaryOrangeButton'
import SecondaryOutlineButton from './Components/SecondaryOutlineButton'

const AllComponents = () => {
    return (
        <div class="container all-components">
            {/* Text */}
            <div>
                <h1>This is an H1 of 40px</h1>
                <h2>This is an H2 of 25px</h2>
                <p>This is a Regular Text (p) of 16px</p>
            </div>
            

            {/* Primary Buttons */}
            <div className="row">
                <h1>Primary Buttons: </h1>

                <div className="row">
                    <div className="col">
                        <p>&lt;PrimaryButton size="big" content="Big button"&gt;. It's supposed to take 100% of the width of the container</p>
                        <PrimaryButton size="big" content="Big Button" />
                    </div>

                    <div className="col">
                        <p>&lt;PrimaryButton size="small" content="Small Button"&gt;</p>
                        <PrimaryButton size="small" content="Small Button" />
                    </div>
                </div>
            </div>


            {/* Secondary Buttons */}
            <div className="row">
                <h1>Secondary Buttons:</h1>
                
                <div className="row">
                    <div className="col">
                        <p>&lt;SecondaryOrangeButton content="Secondary orange"&gt;</p>
                        <SecondaryOrangeButton content="Secondary orange" />
                    </div>

                    <div className="col">
                        <p>&lt;SecondaryOutlineButton content="Secondary outline"&gt;</p>
                        <SecondaryOutlineButton content="Secondary outline" />
                    </div>
                </div>
            </div>


            {/* Pagination */}
            <div>
                <h1>Pagination:</h1>
                <p>&lt;Pagination numberOfPages=10 activePage=4&gt;</p>

                <Pagination numberOfPages={10} activePage={4}/>
            </div>


            {/* Filters */}
            <div>
                <h1>Filters:</h1>
                <p>&lt;FilterItem filterName="Barcelona" filterOptions=['Barcelona','Madrid', 'Sevilla']&gt;</p>
                <
                    FilterItem filterName="Barcelona" filterOptions ={['Valencia', 'Madrid', 'Sevilla']} />
            </div>


            {/* Checkmarks Cards */}
            <div>
                <h1>CheckmarksCard:</h1>
                <p>It is supposed to take 100% width of the container, so it should be used with rows/columns</p>

                <p>
                    &lt;CheckmarksCard <br/>
                    image="ruta" <br/>
                    title="propietario" <br/>
                    items=["Incentivos fiscales", "Amplia cartera de clientes", "Ayude a una causa social"]<br/>
                    buttonText="boton"&gt;
                </p>

                <div className="row">
                    <div className="col">
                        <CheckmarksCard 
                            image = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17634e108a2%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17634e108a2%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22106.390625%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                            title = "Propietario"
                            items = {["Incentivos fiscales", "Amplia cartera de clientes", "Ayude a una causa social"]}
                            buttonText = "Boton"           
                        />
                    </div>

                    <div className="col">
                        <CheckmarksCard 
                            image = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17634e108a2%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17634e108a2%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22106.390625%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                            title = "Propietario"
                            items = {["Incentivos fiscales", "Amplia cartera de clientes", "Ayude a una causa social"]}
                            buttonText = "Boton"           
                        />
                    </div>

                    <div className="col">
                        <CheckmarksCard 
                            image = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17634e108a2%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17634e108a2%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22106.390625%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                            title = "Propietario"
                            items = {["Incentivos fiscales", "Amplia cartera de clientes", "Ayude a una causa social"]}
                            buttonText = "Boton"           
                        />
                    </div>
                </div>
                
            </div>

            {/* Contact Form */}
            <div>
                <h1>Contact Form:</h1>
                <p>&lt;ContactForm /&gt;</p>
                <ContactForm />
            </div>
            
            {/* Footer */}
            <div>
                <h1>Footer:</h1>
                <p>&lt;Footer /&gt;</p>
                <Footer />
            </div>
        </div>
    )
}

export default AllComponents
