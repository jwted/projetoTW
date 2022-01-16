function  createNav(){
    let nav=document.querySelector(".navbar");
    nav.innerHTML=`
        <div class="nav">
                <img src="img/logo2.png" class="sitelogo" alt="">
                <div class="nav-item">
                    <div class="search">
                        <input type="text" class="searchbar" placeholder="search brand,product">
                        <button class="search-btn">search</button>
                    </div>
                    <a href="#"><img src="img/user2.png" alt=""></a>
                    <a href="#"><img src="img/cart2.png" alt=""></a>
                </div>
            </div>
            <ul class="links-container">
                <li class="link-item"><a href="#" class="link">home</a></li>
                <li class="link-item"><a href="#" class="link">puzzles</a></li>
                <li class="link-item"><a href="#" class="link">lubricant</a></li>
                <li class="link-item"><a href="#" class="link">accessories</a></li>
                <li class="link-item"><a href="#" class="link">resources</a></li>
            </ul>
    
    `;
} 

createNav();