// File Name: About
// Purpose: Shows info regarding the project and give credits and references.
// Detail: Giving credits and option to log out of the web application. 

const About = (props) => {

    const logOut = () => {
        props.logOut(false);
        props.setCurrentPage('login');
    }
    return(
        <main className="bg-[#DAE2DF] min-h-screen px-6 py-16">
            <section className="max-w-4xl min-h-screen mx-auto bg-white mt-15 p-7 rounded-md shadow-md border border-[#A0BBBF]">
                <h1 className="text-3xl font-bold text-[#0A171A] pt-10 mb-4">About This Project</h1>
                <p className="text-[#3D5C64] text-xl leading-relaxed mb-6 text-left">Author: Felix Yap</p>
                <p className="text-[#3D5C64] text-xl leading-relaxed mb-6 text-left">Email: felixyappy@gmail.com</p>
                <p className="text-[#3D5C64] text-xl leading-relaxed mb-6 text-left">Instructor: Randy Connolly</p>
                <p className="text-[#3D5C64] text-xl leading-relaxed mb-6 text-left">
                    Detail: 
                    This web application retrieves datas such as, artists, galleries, genres and paintings from 
                    supabase API created from Assignment 1. Users will need to register if doesn't exist and login 
                    with personal credentials. Users are able to view those datas by navigating tabs on the header with 
                    respectives category. Galleries, Paintings and Artists are available for adding into Favourite by 
                    user preferences. Individual items are able to be removed in Favourite page.
                </p>
                <p className="text-[#3D5C64] text-xl leading-relaxed mb-6 text-left">
                    Limitations:
                    <ul className="list-disc list-inside space-y-2 text-[#3D5C64] text-left">
                        <li>Every time when page is refreshed, datas like registered credentials and favourite item will be lost.</li>
                        <li>Also user will be forced log out.</li>
                        <li>Multiple selection for adding and removing object to/from favourite is not available.</li>
                    </ul>
                </p>


                <p className="text-[#3D5C64] text-xl leading-relaxed mb-6 text-left">References:</p>
                <ul className="list-disc list-inside space-y-2 text-[#3D5C64] text-left">
                    <li><a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fgr.pinterest.com%2Fvbaimas%2Fcolor-palettes%2F&psig=AOvVaw3yklvah5W34LremPIq-6Lo&ust=1742679569548000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCJjWg7-RnIwDFQAAAAAdAAAAABAR"
                        className="underline">
                        Color Scheme
                    </a>
                    </li>
                    <li><a href="https://unsplash.com/photos/black-textile-on-green-textile-FtOfK7TAYmw?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash"
                        className="underline">
                        Hero Image
                    </a>
                    </li>
                    <li><a href="https://pngtree.com/freepng/red-and-black-logo_5517319.html"
                        className="underline">
                        Logo Image
                    </a></li>
                    <li><a href="https://leafletjs.com/reference.html"
                        className="underline">
                        React Leaflet(Map)
                    </a></li>
                    <li><a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Ficonduck.com%2Ficons%2F185431%2Fflickr&psig=AOvVaw19YwpWNzWiMeZybD5ZRKDn&ust=1744164208564000&source=images&cd=vfe&opi=89978449&ved=0CBQQjhxqFwoTCJieypasx4wDFQAAAAAdAAAAABAJ"
                        className="underline">
                        Flickr Place Image
                    </a>
                    </li>
                    <li><a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Ficonduck.com%2Ficons%2F14267%2Fyahoo&psig=AOvVaw07DB-yqN-wTe1Wq6uXHq3O&ust=1744164329537000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCPi_rdCsx4wDFQAAAAAdAAAAABAJ"
                        className="underline">
                        Yahoo Image
                    </a>
                    </li>
                    <li><a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fuxwing.com%2Fgoogle-map-icon%2F&psig=AOvVaw2asN6g0eihPAXoA80TB7uP&ust=1744164121381000&source=images&cd=vfe&opi=89978449&ved=0CBQQjhxqFwoTCNiI7eqrx4wDFQAAAAAdAAAAABAE"
                        className="underline">
                        Google Map Image
                    </a>
                    </li>

                </ul>

                <button className="px-4 py-2 rounded-md bg-[#0A171A] text-white hover:bg-[#3D5C64] transition font-semibold"
                        onClick={() => logOut()}>
                    Log out
                </button>


            </section>
        </main>
    );
}

export default About;