<?php if($page=='dashboard'){?>
    <div class="w-[98%] flex gap-2 mt-3 flex-wrap content-start">
        <div class="count-div">
            <div class="w-[90%] m-5 font-bold">
                <div class="text-2xl counter" id="">0</div>
                <div class="text-sm">TOTAL ADMIN/STAFF</div>
                <i class="bi-people-fill text-3xl"></i>
            </div>
        </div>

        <div class="count-div">
            <div class="w-[90%] m-5 font-bold">
                <div class="text-2xl counter" id=""></div>
                <div class="text-sm">TOTAL CUSTOMERS</div>
                <i class="bi-people-fill text-3xl"></i>
            </div>
        </div>

        <div class="count-div">
            <div class="w-[90%] m-5 font-bold">
                <div class="text-2xl counter" id=""></div>
                <div class="text-sm">TOTAL LOCATION</div>
                <i class="bi-geo-alt-fill text-3xl"></i>
            </div>
        </div>

        <div class="count-div">
            <div class="w-[90%] m-5 font-bold">
                <div class="text-2xl counter" id=""></div>
                <div class="text-sm">TOTAL PARKING SLOT</div>
                <i class="bi-p-square-fill text-3xl"></i>
            </div>
        </div>

        <div class="count-div">
            <div class="w-[90%] m-5 font-bold">
                <div class="text-2xl counter" id=""></div>
                <div class="text-sm">TOTAL BOOKING</div>
                <i class="bi-journal-richtext text-3xl"></i>
            </div>
        </div>
				
        <div class="count-div">
            <div class="w-[90%] m-5 font-bold">
                <div class="text-2xl counter" id=""></div>
                <div class="text-sm">TOTAL REVENUE</div>
                <i class="bi-wallet-fill text-3xl"></i>
            </div>
        </div>
	</div>
<?php }?>

<?php if($page=='all-staff'){?>
   <div class="w-[100%] h-[55px] text-white bg-[#EBEBEB] rounded-md font-body">
        <div class="w-[95%] h-[55px] m-auto flex justify-between items-center content-center gap-[5px] text-[10px] text-[#ABABAB]">
            <select class="w-[20%] h-[45px] bg-white pl-[20px] rounded-[5px] focus:border-black border-solid border focus:border-opacity-30 flex flex-grow" id="statusId" onchange="">
                <option value="">All Status</option>
                <script>getStatus();</script>
            </select>
            <input class="w-[30%] h-[45px] bg-white pl-[20px] rounded-[5px] outline-none focus:border-black border-solid border focus:border-opacity-30 flex flex-grow" type="text" id="search" onkeyup="" placeholder="Type here to search..." title="Type here to search"/>
        </div>

        <div class="w-[100%] h-[40px] bg-[#ECF5F0] border-solid border border-[#A0E5BD] flex justify-center">
            <div class="w-[98%] flex items-center justify-between text-[#424141]">
                <div><i class="bi-people-fill"></i>  ACTIVE ADMINISTRATOR'S LIST</div>
                <button class="text-sm py-[5px] px-[10px] bg-[#0E4000]" title="Add new staff"  onClick="getForm('staffReg');">ADD NEW STAFF <i class="bi-person-plus"></i></button>
            </div>
        </div>

        <div class="w-[98%] m-auto mt-[10px]" id="fetchAllStaff">
            <script>allStaff();</script>
        </div>
   </div>
<?php }?>

<?php if($page=='allLocation'){?>
   <div class="w-[100%] h-[55px] rounded-md font-body">
        <div class="w-[95%] h-[55px] m-auto flex justify-between items-center content-center gap-[5px] text-[10px] text-[#ABABAB]">
            <select class="w-[20%] h-[45px] bg-white pl-[20px] rounded-[5px] focus:border-black border-solid border focus:border-opacity-30 flex flex-grow" id="status_id" onchange="_all_student(1, this.value, faculty_id, department_id, level_id);">
                <option value="">All Status</option>
                <script>getStatus();</script>
            </select>
            <input class="w-[30%] h-[45px] bg-white pl-[20px] rounded-[5px] outline-none focus:border-black border-solid border focus:border-opacity-30 flex flex-grow" type="text" id="search" onkeyup="_all_student(1, '');" placeholder="Type here to search..." title="Type here to search"/>
        </div>

        <div class="w-[100%] h-[40px] bg-[#ECF5F0] border-solid border border-[#A0E5BD] flex justify-center">
            <div class="w-[98%] flex items-center justify-between text-[#424141]">
                <div><i class="bi-geo-alt"></i>  ALL LOCATION'S LIST</div>
                <button class="text-sm py-[5px] px-[10px] bg-[#0E4000]" title="Add new staff"  onClick="getForm('locationReg');">ADD NEW LOCATION <i class="bi-person-plus"></i></button>
            </div>
        </div>

        <div class="w-[98%] m-auto mt-[10px]" id="fetchAllLocation">
            <script>allLocation();</script>
        </div>
   </div>  
<?php }?>

<?php if($page=='allSlot'){?>
   <div class="w-[100%] h-[55px] rounded-md font-body">
        <div class="w-[95%] h-[55px] m-auto flex justify-between items-center content-center gap-[5px] text-[10px] text-[#ABABAB]">
            <select class="w-[20%] h-[45px] bg-white pl-[20px] rounded-[5px] focus:border-black border-solid border focus:border-opacity-30 flex flex-grow" id="status_id" onchange="_all_student(1, this.value, faculty_id, department_id, level_id);">
                <option value="">All Status</option>
                <script>getStatus();</script>
            </select>
            <input class="w-[30%] h-[45px] bg-white pl-[20px] rounded-[5px] outline-none focus:border-black border-solid border focus:border-opacity-30 flex flex-grow" type="text" id="search" onkeyup="_all_student(1, '');" placeholder="Type here to search..." title="Type here to search"/>
        </div>

        <div class="w-[100%] h-[40px] bg-[#ECF5F0] border-solid border border-[#A0E5BD] flex justify-center">
            <div class="w-[98%] flex items-center justify-between text-[#424141]">
                <div><i class="bi-geo-alt"></i>  ALL SLOT'S LIST</div>
                <button class="text-sm py-[5px] px-[10px] bg-[#0E4000]" title="Add new staff"  onClick="getForm('newSlot');">ADD NEW SLOT <i class="bi-person-plus"></i></button>
            </div>
        </div>

        <div class="w-[98%] m-auto mt-[10px]" id="fetchAllSlot">
            <script>allSlot();</script>
        </div>
   </div>  
<?php }?>

<?php if($page=='allCustomer'){?>
   <div class="w-[100%] h-[55px] rounded-md font-body">
        <div class="w-[95%] h-[55px] m-auto flex justify-between items-center content-center gap-[5px] text-[10px] text-[#ABABAB]">
            <select class="w-[20%] h-[45px] bg-white pl-[20px] rounded-[5px] focus:border-black border-solid border focus:border-opacity-30 flex flex-grow" id="status_id" onchange="_all_student(1, this.value, faculty_id, department_id, level_id);">
                <option value="">All Status</option>
                <script>_get_status();</script>
            </select>
            <input class="w-[30%] h-[45px] bg-white pl-[20px] rounded-[5px] outline-none focus:border-black border-solid border focus:border-opacity-30 flex flex-grow" type="text" id="search" onkeyup="_all_student(1, '');" placeholder="Type here to search..." title="Type here to search"/>
        </div>


        <div class="w-[100%] h-[40px] bg-[#ECF5F0] border-solid border border-[#A0E5BD] flex justify-center">
            <div class="w-[98%] flex items-center justify-between text-[#424141]">
                <div><i class="bi-people-fill"></i>  ACTIVE CUSTOMER'S LIST</div>
            </div>
        </div>

        <div class="w-[98%] m-auto mt-[10px]" id="fetchAllCustomers">
            <script>allCustomers();</script>
        </div>
   </div>  
<?php }?>

<?php if($page=='customerProfile'){?>
    <div class="mt-[60px] mb-[150px] log-div" id="customer-profile">
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
                <label class="px-[15px] text-gray-500"> CUSTOMER ID:</label><br/>
                <div class="relative flex items-center">
                    <input class="formInput" type="text" readonly="readonly" id="customerId" placeholder="CUSTOMER ID"/>
                    <i class="bi-lock-fill absolute right-3 text-primary-color"></i>
                </div>
            </div>

            <div class="w-[100%]">
                <label class="px-[15px] text-gray-500"> DATE OF REGISTRATION:</label><br/>
                <div class="relative flex items-center">
                    <input class="formInput" type="text" readonly="readonly" id="regDate" placeholder="DATE OF REGISTRATION"/>
                    <i class="bi-lock-fill absolute right-3 text-primary-color"></i>
                </div>
            </div>
        </div>

        <button class="w-[15%] float-right mt-[20px]" id="submit_btn" title="" onclick="">UPDATE PROFILE <i class="bi-check2"></i></button>
        <script>getCustomerProfile('<?php echo $ids;?>')</script>
    </div> 
<?php }?>

<?php include 'aos-script.php';?>


<script>
    superplaceholder({
        el: search,
            sentences: [ 'Type here to search'],
            options: {
            letterDelay: 80,
            loop: true,
            startOnFocus: false
        }
    });
</script>



  

