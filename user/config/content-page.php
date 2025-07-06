<?php if($page=='log-in'){?>
   
    <div class="block log-div" id="next1">
        <p class="bg-[#F4FDF8] text-[#95A2A2] font-bold border-[#A5EAC2] border-[1px] py-[10px] px-[15px] mt-[20px]">Kindly provide your <span class="text-[#83C2E7]">Matric Number</span> and <span class="text-[#83C2E7]">Firstname</span> to login.</p>

        <div class="mt-[20px] font-bold text-[12px] flex flex-col gap-[18px]">
            <div class="w-[100%]">
                <label class="px-[10px] text-secondary-color"><i class="bi-envelope-fill text-[#A4A6C5]"></i> EMAIL ADDRESS:</label><br/>
                <input class="w-[100%] my-[10px] py-[15px] px-[20px] bg-white outline-none border-primary-color border-[1px] rounded-[5px]" type="text" id="loginEmail" placeholder="ENTER YOUR EMAIL ADDRESS"/>
            </div>
            
            <div class="w-[100%]">
                <label class="px-[10px] text-secondary-color"><i class="bi-vinyl text-[#A4A6C5]"></i> PASSWORD:</label><br/>
                <input class="w-[100%] my-[10px] py-[15px] px-[20px] bg-white outline-none border-primary-color border-[1px] rounded-[5px]" type="password" id="loginPass" placeholder="ENTER YOUR PASSWORD"/>
            </div>

            <button class="w-[40%] bg-primary-color hover:bg-[#444444] text-white py-[15px] rounded-[5px]" title="Login" id="submitBtn" onclick="logIn()">LOG-IN <i class="bi-check2"></i></button>
        </div>

        <p class="bg-[#FEF7F4] text-[#95A2A2] font-bold border-[#F5C0A5] border-[1px] py-[10px] px-[15px] mt-[10px]">Forget Password? <span class="text-[#83C2E7] cursor-pointer" onclick="nextPage('next2')">RESET PASSWORD</span></p>
    </div>

    
    <div class="hidden log-div" id="next2">
        <p class="bg-[#F4FDF8] text-[#95A2A2] font-bold border-[#A5EAC2] border-[1px] py-[10px] px-[15px] mt-[20px]">Kindly provide your <span class="text-[#83C2E7]">Email Address</span> to reset your password.</p>

        <div class="mt-[20px] font-bold text-[12px] flex flex-col gap-[18px]">
            <div class="w-[100%]">
                <label class="px-[10px] text-secondary-color"><i class="bi-envelope-fill text-[#A4A6C5]"></i> EMAIL ADDRESS:</label><br/>
                <input class="w-[100%] my-[10px] py-[15px] px-[20px] bg-white outline-none border-primary-color border-[1px] rounded-[5px]" type="email" id="emailAdress" placeholder="ENTER YOUR EMAIL ADDRESS"/>
            </div>
            
            <button class="w-[40%] bg-primary-color hover:bg-[#444444] text-white py-[15px] rounded-[5px]" title="Reset Password" id="submitButton" onclick="resetPassword()">RESET PASSWORD</i></button>
        </div>

        <p class="bg-[#FEF7F4] text-[#95A2A2] font-bold border-[#F5C0A5] border-[1px] py-[10px] px-[15px] mt-[10px]">Existing User? <span class="text-[#83C2E7] cursor-pointer" onclick="nextPage('next1')">LOG-IN HERE</span></p>
    </div>


    <div class="hidden log-div" id="next3">
        <div class="mt-[20px] font-bold text-[12px] flex flex-col gap-[18px]">

            <div class="w-[100%]">
                <label class="px-[10px] text-secondary-color">FIRST NAME:</label><br/>
                <input class="w-[100%] my-[10px] py-[15px] px-[20px] bg-white outline-none border-primary-color border-[1px] rounded-[5px]" type="text" id="firstName" placeholder="FIRST NAME"/>
            </div>

            <div class="w-[100%]">
                <label class="px-[10px] text-secondary-color">MIDDLE NAME:</label><br/>
                <input class="w-[100%] my-[10px] py-[15px] px-[20px] bg-white outline-none border-primary-color border-[1px] rounded-[5px]" type="text" id="middleName" placeholder="MIDDLE NAME"/>
            </div>

            <div class="w-[100%]">
                <label class="px-[10px] text-secondary-color">LAST NAME:</label><br/>
                <input class="w-[100%] my-[10px] py-[15px] px-[20px] bg-white outline-none border-primary-color border-[1px] rounded-[5px]" type="text" id="lastName" placeholder="LAST NAME"/>
            </div>

            <div class="w-[100%]">
                <label class="px-[10px] text-secondary-color">EMAIL ADDRESS:</label><br/>
                <input class="w-[100%] my-[10px] py-[15px] px-[20px] bg-white outline-none border-primary-color border-[1px] rounded-[5px]" type="email" id="emailAddress" placeholder="ENTER YOUR EMAIL ADDRESS"/>
            </div>

            <div class="w-[100%]">
                <label class="px-[10px] text-secondary-color">PHONE NUMBER:</label><br/>
                <input class="w-[100%] my-[10px] py-[15px] px-[20px] bg-white outline-none border-primary-color border-[1px] rounded-[5px]" type="tel" id="mobileNo" placeholder="PHONE NUMBER"/>
            </div>

            <div class="w-[100%]">
                <label class="px-[10px] text-secondary-color">GENDER:</label><br/>
                <select class="w-[100%] my-[10px] py-[15px] px-[20px] bg-white outline-none border-primary-color border-[1px] rounded-[5px]" id="genderId">
                    <script>getGender();</script>
                </select>
            </div>
            
            <button class="w-[40%] bg-primary-color hover:bg-[#444444] text-white py-[15px] rounded-[5px]" title="Signup" id="submitBtns" onclick="newUser();">SIGN-UP <i class="bi-check2"></i></button>
        </div>
    </div>

<?php }?>




  

