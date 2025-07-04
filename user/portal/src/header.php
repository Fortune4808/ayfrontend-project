<header class="fixed w-full min-h-[70px] bg-white/90 flex items-center justify-between">
    <div class="pl-[230px] w-[95%] flex justify-end gap-6 h-custom-screen-mm:pl-0">
        <div class="flex items-center"><p>Welcome! <span id="welcomeName"></span></p></div>
        <div class="w-[40px] h-[40px] rounded-full"><img id="pictureBox1" class="w-[100%] h-[100%] object-cover rounded-full" alt="" title="Profile Pix" style="width: 40px; height: 40px; object-position: top;" /></div>
    </div>
</header>

<nav class="fixed w-[230px] h-screen bg-black/90 text-white h-custom-screen-mm:hidden">
    <div class="w-full h-[100px] flex justify-center bg-white/80 p-4">
        <img src="./src/all-images/image-pix/icon.png" alt="<?php echo $websiteName;?> Logo" title="<?php echo $websiteName;?> Logo" />
    </div>
    
    <ul>
        <li class="side-links" onclick="getPage('dashboard')"><i class="bi-speedometer2 mr-[6px]"></i> Dashboard</li>
        <li class="side-links" onclick="expandLink('fees');" title="Fees" id=""><i class="bi-book mr-[6px]"></i> Fees<i class="bi bi-chevron-down float-right mr-[15px]"></i>
            <div class="w-[100%] bg-white/50" id="fees-li" style="display:none">   
                <div class="li-in" onclick="getPage('payment-history');"> - Payment History</div>
                <div class="li-in" onclick="getPage('payment-advice');"> - Payment Advise</div>
            </div>
        </li>
        <li class="side-links" onclick="logOut();"><i class="bi-power mr-[6px]"></i> Log-Out</li>
    </ul>
</nav>