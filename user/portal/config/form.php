<?php if ($page=='bookingForm'){?>
    <div class="absolute h-screen w-[500px] bg-white right-0 animated fadeInRight">
        <div class="formHeader">
            <p class="text-white text-[13px] font-semibold font-title"><i class="bi-person-plus"></i> Booking Form </p>
            <div class="bg-white bg-opacity-80 px-[8px] py-[3px] rounded-[100%] text-[#f00] text-[18px] cursor-pointer" title="close" onclick="alertClose()"><i class="bi-x"></i></div>
        </div>

        <div class="w-[100%] h-[calc(100%-50px)] absolute overflow-auto">

            <div class="w-[90%] m-auto">

                <div class="my-[20px] text-[12px] flex flex-col gap-[5px]">

                <div class="mt-[10px] text-[12px] flex gap-[5px]">

                    <div class="w-[100%]">
                        <label class="px-[15px] text-gray-500"> LOCATION:</label><br/>
                        <div class="relative flex items-center">
                            <input class="formInput" type="text" readonly="readonly" id="" placeholder="LOCATION"/>
                            <i class="bi-lock-fill absolute right-3 text-primary-color"></i>
                        </div>
                    </div>

                    <div class="w-[100%]">
                        <label class="px-[15px] text-gray-500"> SLOT:</label><br/>
                        <div class="relative flex items-center">
                            <input class="formInput" type="text" readonly="readonly" id="" placeholder="SLOT"/>
                            <i class="bi-lock-fill absolute right-3 text-primary-color"></i>
                        </div>
                    </div>
                </div>

                    <button class="w-[40%]" title="submit" id="submitBtn" onclick=""><i class="bi-check2"></i> UPDATE</button>
                </div>
            </div>
        </div>
    </div>
<?php }?>