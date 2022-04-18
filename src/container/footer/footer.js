
const Footer = () => {

    return (

        <footer class="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-4 dark:bg-gray-800 fixed inset-x-0 bottom-0">
            <ul class="md:flex md:gap-10 sm:block sm:text-align: center ">
                <li class="sm:pb-1">
                    <a href="#" class="hover:underline md:mr-10 md:ml-5">Home</a>
                </li>
                <li class="sm:pb-1">
                    <a href="#" class="hover:underline md:mr-10  md:ml-5">Link1</a>
                </li>
                <li class="sm:pb-1">
                    <a href="#" class="hover:underline md:mr-10  md:ml-5">Link2</a>
                </li>
                <li class="sm:pb-1">
                    <a href="#" class="hover:underline md:mr-10  md:ml-5">Link3</a>
                </li>
                <li class="sm:pb-1">
                    <a href="#" class="hover:underline md:mr-10  md:ml-5">Link4</a>
                </li>
            </ul>

            <div class="text-center">
                <img src="" alt="Logo.img"/>
                <span class="static bottom-0">© 2022 <a href="https://flowbite.com" class="hover:underline">WebSite-Name</a></span>
            </div>
        </footer>
    )
}

export default Footer