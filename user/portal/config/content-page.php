<?php if($page=='dashboard'){?>
   <div class="w-[95%] m-auto mt-5 flex flex-wrap gap-3">
        <div class="w-[30%] min-h-[130px] bg-white shadow-[0px_0px_12px_2px_rgba(34,34,34,0.06)] flex-grow border-l-2 border-primary-color rounded-md flex justify-center">
            <div class="w-[90%] flex items-center text-[#424141]">
                <div class="w-[100%] flex flex-col gap-1">
                    <div class="text-3xl font-bold text-primary-color" id="">0</div>
                    <div class="text-sm font-bold">TOTAL SLOT</div>
                    <i class="bi-p-square-fill text-3xl"></i>
                </div>
            </div>
        </div>

        <div class="w-[30%] min-h-[130px] bg-white shadow-[0px_0px_12px_2px_rgba(34,34,34,0.06)] flex-grow border-l-2 border-primary-color rounded-md flex justify-center">
            <div class="w-[90%] flex items-center text-[#424141]">
                <div class="w-[100%] flex flex-col gap-1">
                    <div class="text-3xl font-bold text-primary-color" id="">0</div>
                    <div class="text-sm font-bold">TOTAL AVAILABLE SLOT</div>
                    <i class="bi-p-square-fill text-3xl"></i>
                </div>
            </div>
        </div>

        <div class="w-[30%] min-h-[130px] bg-white shadow-[0px_0px_12px_2px_rgba(34,34,34,0.06)] flex-grow border-l-2 border-primary-color rounded-md flex justify-center">
            <div class="w-[90%] flex items-center text-[#424141]">
                <div class="w-[100%] flex flex-col gap-1">
                    <div class="text-3xl font-bold text-primary-color" id="">0</div>
                    <div class="text-sm font-bold">TOTAL SLOT BOOKED</div>
                    <i class="bi-p-square-fill text-3xl"></i>
                </div>
            </div>
        </div>
    </div>
<?php }?>

<?php if($page=='slot'){?>
   <div class="w-[95%] m-auto mt-5">
        <h2 class="font-bold">All Slot</h2>

        <div class="mt-[10px]" id="fetchAllSlot">
            <script>allSlot(1);</script>
        </div>
    </div>
<?php }?>

