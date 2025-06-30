<?php if($page=='dashboard'){?>
   <div class="w-[95%] m-auto mt-5">
        <h1 class="font-bold">My Profile Details</h1>

        <table class="mt-3">
            <tr>
                <td class="font-bold"><i class="bi bi-chevron-right"></i> STUDENT FULLNAME</td>
                <td id="fullname"></td>
            </tr>
             <tr>
                <td class="font-bold"><i class="bi bi-chevron-right"></i> MATRIC NUMBER</td>
                <td id="matricno"></td>
            </tr>
             <tr>
                <td class="font-bold"><i class="bi bi-chevron-right"></i> SCHOOL</td>
                <td id="school"></td>
            </tr>
             <tr>
                <td class="font-bold"><i class="bi bi-chevron-right"></i> PROGRAMME</td>
                <td id="programme"></td>
            </tr>
             <tr>
                <td class="font-bold"><i class="bi bi-chevron-right"></i> LEVEL</td>
                <td id="level"></td>
            </tr>
             <tr>
                <td class="font-bold"><i class="bi bi-chevron-right"></i> SESSION</td>
                <td id="session"></td>
            </tr>
        </table>
    </div>
    <script>fetchStudent()</script>
    <script>sessionValidation()</script>
<?php }?>

<?php if($page=='payment-history'){?>
   <div class="w-[95%] m-auto mt-5">
        <h2 class="font-bold">Payment Details</h2>

        <div class="mt-[10px]" id="fetch_all_payment_history">
            <script>fetchPaymentHistory(1);</script>
        </div>
    </div>
<?php }?>

<?php if($page=='payment-advice'){?>
   <div class="w-[95%] m-auto mt-5">
        <h2 class="font-bold">Payment Advice</h2>

        <div class="mt-[10px]" id="">
            
        </div>
    </div>
<?php }?>

