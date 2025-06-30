<?php if ($page=='staffReg'){?>
    <div class="absolute h-screen w-[500px] bg-white right-0 animated fadeInRight">
        <div class="formHeader">
            <p class="text-white text-[13px] font-semibold font-title"><i class="bi-person-plus"></i> New Staff/Admin Registration Form </p>
            <div class="bg-white bg-opacity-80 px-[8px] py-[3px] rounded-[100%] text-[#f00] text-[18px] cursor-pointer" title="close" onclick="alertClose()"><i class="bi-x"></i></div>
        </div>

        <div class="w-[100%] h-[calc(100%-50px)] absolute overflow-auto">

            <div class="w-[90%] m-auto">
                <div class="mt-[15px] p-[10px] bg-[#FAF3F0] border border-solid border-[#F2BDA2] font-title">
                    <p class="text-[#424141]">Kindly fill the form below to <span class="text-[#83C2E7] font-bold">Add New Staff/Admin</span></p>
                </div>

                <div class="my-[20px] text-[12px] flex flex-col gap-[5px]">
                    <div class="w-[100%]">
                        <label class="px-[10px] text-primary-color"> FIRST NAME:</label><br/>
                        <input class="formInput" type="text" id="firstName" placeholder="ENTER FIRST NAME"/>
                    </div>

                    <div class="w-[100%]">
                        <label class="px-[10px] text-primary-color"> MIDDLE NAME:</label><br/>
                        <input class="formInput" type="text" id="middleName" placeholder="ENTER MIDDLE NAME"/>
                    </div>

                    <div class="w-[100%]">
                        <label class="px-[10px] text-primary-color"> LAST NAME:</label><br/>
                        <input class="formInput" type="text" id="lastName" placeholder="ENTER LAST NAME"/>
                    </div>
            
                    <div class="w-[100%]">
                        <label class="px-[10px] text-primary-color"> PHONE NUMBER:</label><br/>
                        <input class="formInput" type="tel" id="phoneNo" placeholder="ENTER PHONE NUMBER"/>
                    </div>

                    <div class="w-[100%]">
                        <label class="px-[10px] text-primary-color"> EMAIL ADDRESS:</label><br/>
                        <input class="formInput" type="email" id="emailAddress" placeholder="ENTER EMAIL ADDRESS"/>
                    </div>

                    <div class="w-[100%]">
                        <label class="px-[10px] text-primary-color"> GENDER:</label><br/>
                        <select class="formInput" id="genderId">
                            <script>getGender();</script>
                        </select>
                    </div>

                    <div class="w-[100%]">
                        <label class="px-[10px] text-primary-color"> STAFF ROLE:</label><br/>
                        <select class="formInput" id="roleId">
                            <script>getRole();</script>
                        </select>
                    </div>

                    <div class="w-[100%]">
                        <label class="px-[10px] text-primary-color"> STATUS:</label><br/>
                        <select class="formInput" id="statusId">
                            <script>getStatus();</script>
                        </select>
                    </div>

                    <button class="w-[40%]" title="submit" id="submitBtn" onclick="newStaff();"><i class="bi-check2"></i> SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
<?php }?>

<?php if($page=='myProfileModule'){?>
    <div class="absolute h-screen w-[90%] right-[5%] top-[55px] bg-white animated fadeInUp">
        <div class="formHeader">
            <p class="text-white text-[13px] font-bold"><i class="bi-person-fill"></i> ADMINISTRATOR'S PROFILE</p>
            <div class="bg-white bg-opacity-80 px-[8px] py-[3px] rounded-[100%] text-[#f00] text-[18px] cursor-pointer" title="close" onclick="alertClose()"><i class="bi-x"></i></div>
        </div>

        <div class="w-[100%] h-[calc(100%-50px)] absolute overflow-auto">
            <div class="w-[100%] h-[150px] bg-profile-background bg-cover"></div>
            <div class="w-[90%] m-auto mt-[-50px]">
                <label>
                    <div class="w-[100px] h-[100px] border-[2px] border-white float-left rounded-[7px]" >
                        <img class="w-full h-full object-cover rounded-[5px]" alt="Profile Picture" title="Profile Picture" id="pictureBox2" style="width: 100px; height: 100px; object-position: top;"/>
                        <input type="file" id="profilePix" style="display:none" accept=".jpg, .jpeg, .png, .gif, .bmp, .tiff, .webp, .svg, .avif" onchange="Upload.UpdatePreview(this);"/>
                    </div>
                </label>

                <div class="w-[calc(100%-110px)] float-right text-[#999] font-title">
                    <p class="text-[25px] text-white font-bold" id="loginStaffProfiles">xxxx</p>
                    <p class="text-[11px] p-[20px] pl-[0px] font-body">STATUS: <strong id="loginStatusName">XXXX</strong> | LAST LOGIN DATE: <strong id="loginStaffLastLogin">xxxx</strong></p>
                </div>
            </div>

            <div class="w-[90%] m-auto mt-[150px] mb-[150px] pb-[50px]">
                <div class="text-[14px] font-bold text-primary-color pl-[10px] pb-[15px] border-b border-primary-color">BASIC INFORMATION</div>

                <div class="mt-[10px] text-[12px] flex gap-[5px]">
                    <div class="w-[100%]">
                        <label class="px-[15px] text-gray-500"> SURNAME:</label><br/>
                        <input class="formInput" type="text" id="surname" placeholder="SURNAME"/>
                    </div>

                    <div class="w-[100%]">
                        <label class="px-[15px] text-gray-500"> OTHER NAMES:</label><br/>
                        <input class="formInput" type="text" id="othernames" placeholder="OTHER NAMES"/>
                    </div>

                    <div class="w-[100%]">
                        <label class="px-[15px] text-gray-500"> GENDER:</label><br/>
                        <select class="formInput" id="genderId">
                           <script>getGender();</script>
                        </select>
                    </div>
                </div>

                <div class="text-[14px] font-bold text-primary-color pl-[10px] pb-[15px] mt-[50px] border-b border-primary-color">CONTACT INFORMATION</div>

                <div class="mt-[10px] text-[12px] flex gap-[5px]">
                    <div class="w-[100%]">
                        <label class="px-[15px] text-gray-500"> EMAIL ADDRESS:</label><br/>
                        <input class="formInput" type="email" id="emailAddress" placeholder="EMAIL ADDRESS"/>
                    </div>

                    <div class="w-[100%]">
                        <label class="px-[15px] text-gray-500"> PHONE NUMBER:</label><br/>
                        <input class="formInput" type="tel" id="phoneNo" placeholder="PHONE NUMBER"/>
                    </div>
                </div>

                <div class="text-[14px] font-bold text-primary-color pl-[10px] pb-[15px] mt-[50px] border-b border-primary-color">ACCOUNT INFORMATION</div>
                
                <div class="mt-[10px] text-[12px] flex gap-[5px]">
                    <div class="w-[100%]">
                        <label class="px-[15px] text-gray-500"> STAFF ID:</label><br/>
                        <div class="relative flex items-center">
                            <input class="formInput" type="text" readonly="readonly" id="staffId" placeholder="STAFF ID"/>
                            <i class="bi-lock-fill absolute right-3 text-primary-color"></i>
                        </div>
                    </div>
                </div>
            
                <div class="mt-[10px] text-[12px] flex gap-[5px]">
                    <div class="w-[100%]">
                        <label class="px-[15px] text-gray-500"> DATE OF REGISTRATION:</label><br/>
                        <div class="relative flex items-center">
                            <input class="formInput" type="text" readonly="readonly" id="rDate" placeholder="DATE OF REGISTRATION"/>
                            <i class="bi-lock-fill absolute right-3 text-primary-color"></i>
                        </div>
                    </div>

                    <div class="w-[100%]">
                        <label class="px-[15px] text-gray-500"> LAST LOGIN DATE:</label><br/>
                        <div class="relative flex items-center">
                            <input class="formInput" type="text" readonly="readonly" id="lastLoginDate" placeholder="LAST LOGIN DATE"/>
                            <i class="bi-lock-fill absolute right-3 text-primary-color"></i>
                        </div>
                    </div>
                </div>

                <div class="text-[14px] font-bold text-primary-color pl-[10px] pb-[15px] mt-[50px] border-b border-primary-color">ADMINISTRATIVE INFORMATION</div>

                <div class="mt-[10px] text-[12px] flex gap-[5px]">
                    <div class="w-[100%]">
                        <label class="px-[15px] text-gray-500"> USER ROLE:</label><br/>
                        <div class="relative flex items-center">
                            <input class="formInput" type="text" readonly="readonly" id="role" placeholder="USER ROLE"/>
                            <input type="hidden" id="roleId" />
                            <i class="bi-lock-fill absolute right-3 text-primary-color"></i>
                        </div>
                    </div>

                    <div class="w-[100%]">
                        <label class="px-[15px] text-gray-500"> USER STATUS:</label><br/>
                        <div class="relative flex items-center">
                            <input class="formInput" type="text" readonly="readonly" id="status" placeholder="USER STATUS"/>
                            <input type="hidden" id="statusId" />
                            <i class="bi-lock-fill absolute right-3 text-primary-color"></i>
                        </div>
                    </div>
                </div>
                <button class="w-[15%] float-right mt-[20px]" id="submit_btn" title="" onclick="_update_staff_data('')">UPDATE PROFILE <i class="bi-check2"></i></button>
            </div>
        </div>
        <script>getStaffLogin();</script>
        <script>upload_pix();</script>
    </div>
<?php }?>

<?php if($page=='staffProfileModule'){?>
    <div class="absolute h-screen w-[90%] right-[5%] top-[55px] bg-white animated fadeInUp">
        <div class="formHeader">
            <p class="text-white text-[13px] font-bold"><i class="bi-person-fill"></i> ADMINISTRATOR'S PROFILE</p>
            <div class="bg-white bg-opacity-80 px-[8px] py-[3px] rounded-[100%] text-[#f00] text-[18px] cursor-pointer" title="close" onclick="alertClose()"><i class="bi-x"></i></div>
        </div>

        <div class="w-[100%] h-[calc(100%-50px)] absolute overflow-auto">
            <div class="w-[100%] h-[150px] bg-profile-background bg-cover"></div>
            <div class="w-[90%] m-auto mt-[-50px]">
                <label>
                    <div class="w-[100px] h-[100px] border-[2px] border-white float-left rounded-[7px]" >
                        <img class="w-full h-full object-cover rounded-[5px]" alt="Profile Picture" title="Profile Picture" id="staffProfilePix" style="width: 100px; height: 100px; object-position: top;"/>
                        <input type="file" id="staffProfilePix" style="display:none" accept=".jpg, .jpeg, .png, .gif, .bmp, .tiff, .webp, .svg, .avif" onchange="Upload.UpdatePreview(this);"/>
                    </div>
                </label>

                <div class="w-[calc(100%-110px)] float-right text-[#999] font-title">
                    <p class="text-[25px] text-white font-bold" id="staffLoginProfiles">xxxx</p>
                    <p class="text-[11px] p-[20px] pl-[0px] font-body">STATUS: <strong id="staffLoginStatusName">XXXX</strong> | LAST LOGIN DATE: <strong id="loginStaffLastLogin">xxxx</strong></p>
                </div>
            </div>

            <div class="w-[90%] m-auto mt-[150px] mb-[150px] pb-[50px]">
                <div class="text-[14px] font-bold text-primary-color pl-[10px] pb-[15px] border-b border-primary-color">BASIC INFORMATION</div>

                <div class="mt-[10px] text-[12px] flex gap-[5px]">
                    <div class="w-[100%]">
                        <label class="px-[15px] text-gray-500"> SURNAME:</label><br/>
                        <input class="formInput" type="text" id="surname" placeholder="SURNAME"/>
                    </div>

                    <div class="w-[100%]">
                        <label class="px-[15px] text-gray-500"> OTHER NAMES:</label><br/>
                        <input class="formInput" type="text" id="othernames" placeholder="OTHER NAMES"/>
                    </div>

                    <div class="w-[100%]">
                        <label class="px-[15px] text-gray-500"> GENDER:</label><br/>
                        <select class="formInput" id="genderId">
                           <script>getGender();</script>
                        </select>
                    </div>
                </div>

                <div class="text-[14px] font-bold text-primary-color pl-[10px] pb-[15px] mt-[50px] border-b border-primary-color">CONTACT INFORMATION</div>

                <div class="mt-[10px] text-[12px] flex gap-[5px]">
                    <div class="w-[100%]">
                        <label class="px-[15px] text-gray-500"> EMAIL ADDRESS:</label><br/>
                        <input class="formInput" type="email" id="emailAddress" placeholder="EMAIL ADDRESS"/>
                    </div>

                    <div class="w-[100%]">
                        <label class="px-[15px] text-gray-500"> PHONE NUMBER:</label><br/>
                        <input class="formInput" type="tel" id="phoneNo" placeholder="PHONE NUMBER"/>
                    </div>
                </div>

                <div class="text-[14px] font-bold text-primary-color pl-[10px] pb-[15px] mt-[50px] border-b border-primary-color">ACCOUNT INFORMATION</div>
                
                <div class="mt-[10px] text-[12px] flex gap-[5px]">
                    <div class="w-[100%]">
                        <label class="px-[15px] text-gray-500"> STAFF ID:</label><br/>
                        <div class="relative flex items-center">
                            <input class="formInput" type="text" readonly="readonly" id="staffId" placeholder="STAFF ID"/>
                            <i class="bi-lock-fill absolute right-3 text-primary-color"></i>
                        </div>
                    </div>
                </div>
            
                <div class="mt-[10px] text-[12px] flex gap-[5px]">
                    <div class="w-[100%]">
                        <label class="px-[15px] text-gray-500"> DATE OF REGISTRATION:</label><br/>
                        <div class="relative flex items-center">
                            <input class="formInput" type="text" readonly="readonly" id="rDate" placeholder="DATE OF REGISTRATION"/>
                            <i class="bi-lock-fill absolute right-3 text-primary-color"></i>
                        </div>
                    </div>

                    <div class="w-[100%]">
                        <label class="px-[15px] text-gray-500"> LAST LOGIN DATE:</label><br/>
                        <div class="relative flex items-center">
                            <input class="formInput" type="text" readonly="readonly" id="lastLoginDate" placeholder="LAST LOGIN DATE"/>
                            <i class="bi-lock-fill absolute right-3 text-primary-color"></i>
                        </div>
                    </div>
                </div>

                <div class="text-[14px] font-bold text-primary-color pl-[10px] pb-[15px] mt-[50px] border-b border-primary-color">ADMINISTRATIVE INFORMATION</div>

                <div class="mt-[10px] text-[12px] flex gap-[5px]">
                    <div class="w-[100%]">
                        <label class="px-[15px] text-gray-500"> USER ROLE:</label><br/>
                        <div class="relative flex items-center">
                            <input class="formInput" type="text" readonly="readonly" id="role" placeholder="USER ROLE"/>
                            <input type="hidden" id="roleId" />
                            <i class="bi-lock-fill absolute right-3 text-primary-color"></i>
                        </div>
                    </div>

                    <div class="w-[100%]">
                        <label class="px-[15px] text-gray-500"> USER STATUS:</label><br/>
                        <div class="relative flex items-center">
                            <input class="formInput" type="text" readonly="readonly" id="status" placeholder="USER STATUS"/>
                            <input type="hidden" id="statusId" />
                            <i class="bi-lock-fill absolute right-3 text-primary-color"></i>
                        </div>
                    </div>
                </div>
                <button class="w-[15%] float-right mt-[20px]" id="submit_btn" title="" onclick="_update_staff_data('')">UPDATE PROFILE <i class="bi-check2"></i></button>
            </div>
        </div>
        <script>staffProfile('<?php echo $ids ?>');</script>
    </div>
<?php }?>

<?php if ($page=='passForm'){?>
    <div class="absolute h-screen w-[500px] bg-white right-0 animated fadeInRight">
        <div class="formHeader">
            <p class="text-white text-[13px] font-semibold font-title"><i class="bi-lock"></i> Change Password Form </p>
            <div class="bg-white bg-opacity-80 px-[8px] py-[3px] rounded-[100%] text-[#f00] text-[18px] cursor-pointer" title="close" onclick="alertClose()"><i class="bi-x"></i></div>
        </div>

        <div class="w-[100%] h-[calc(100%-50px)] absolute overflow-auto">

            <div class="w-[90%] m-auto">
                <div class="mt-[15px] p-[10px] bg-[#FAF3F0] border border-solid border-[#F2BDA2] font-title">
                    <p class="text-[#424141]">Enter the <span class="text-[#46A0DD] font-bold">OLD PASSWORD</span> and create your <span class="text-[#46A0DD] font-bold">NEW PASSWORD</span></p>
                </div>

                <div class="my-[20px] text-[12px] flex flex-col gap-[5px]">
                    <div class="w-[100%]">
                        <label class="px-[10px] text-primary-color"> OLD PASSWORD:</label><br/>
                        <input class="formInput" type="password" id="old_pass" placeholder="ENTER OLD PASSWORD"/>
                    </div>
            
                    <div class="w-[100%]">
                        <label class="px-[10px] text-primary-color"> NEW PASSWORD:</label><br/>
                        <input class="formInput" type="password" id="new_pass" placeholder="CREATE NEW PASSWORD"/>
                    </div>

                    <div class="w-[100%]">
                        <label class="px-[10px] text-primary-color"> CONFIRM NEW PASSWORD:</label><br/>
                        <input class="formInput" type="password" id="confirm_pass" placeholder="CONFIRM NEW PASSWORD"/>
                    </div>

                    <button class="w-[40%]" title="submit" id="submit_btn" onclick="_change_pass(staff_id);"><i class="bi-arrow-repeat"></i> SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
<?php }?>

<?php if($page=='studentProfileModule'){?>
    <div class="absolute h-screen w-[90%] right-[5%] top-[55px] bg-white animated fadeInUp">
        <div class="formHeader">
            <p class="text-white text-[13px] font-bold"><i class="bi-person-fill"></i> STUDENT DETAILS</p>
            <div class="bg-white bg-opacity-80 px-[8px] py-[3px] rounded-[100%] text-[#f00] text-[18px] cursor-pointer" title="close" onclick="alertClose()"><i class="bi-x"></i></div>
        </div>

        <div class="w-[100%] h-[calc(100%-55px)] no-overflow bg-white" id="sb-container">
           <div class="w-[90%] m-auto">
                <div class="w-[100%] min-h-[120px] flex justify-between border-b border-solid border-[#CECDCD]">
                    
                    <div class="w-[65%] flex items-center">
                        <div class="w-[70px] h-[70px]">
                            <img id="customerPix" class="w-[100%] h-[100%] object-cover rounded-[5px]" alt="profile_pix" title="Profile Pix" style="width: 70px; height: 70px; object-position: top;" />
                        </div>

                        <div class="flex flex-col px-[20px]">
                            <p class="text-[20px] font-title" id="customerFullname">XXXX</p>
                            <p class="text-primary-color text-[10px]">Last Login Date: <strong id="lastLogin">xxxx</strong></p>
                        </div>

                    </div>
                </div>

                <nav class="pt-[20px]">
                    <ul class="flex gap-[5px]">
                        <li class="py-[8px] px-[15px] hover:bg-[#d4d4d4] bg-[#d4d4d4] rounded cursor-pointer active" onclick="setActive(this); nextPage('customer-profile')"><i class="bi-person-fill text-primary-color"></i> PROFILE</li>
                    </ul>
                </nav>
                
                <?php $page="customerProfile";?>
                <?php include 'content-page.php';?>
           </div>
        </div>
    </div>
<?php }?>

<script type="text/javascript">$("#sb-container").scrollBox();</script>