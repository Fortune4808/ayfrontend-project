<nav class="fixed w-[230px] h-screen bg-white">
    <div class="mt-[70px]">
        <ul>
            <li class="side-links" onclick="getPage('dashboard');"><i class="bi-speedometer2 text-[#3a4669] mr-[6px]"></i> Dashboard</li>
            <li class="side-links" id="admin-page" onclick="getPage('all-staff');" title="Admin"><i class="bi-people text-[#3a4669] mr-[6px]"></i> Admin/Staff</li>

            <li class="side-links" onclick="getPage('allCustomer');" title="Customer Page"><i class="bi-people text-[#3a4669] mr-[6px]"></i> Customer Page</li>

            <li class="side-links" onclick="expandLink('slot');" title="Location/Slot Page" id="LocationDepartmentId"><i class="bi-geo-alt text-[#3a4669] mr-[6px]"></i> Location/Slot Page<i class="bi bi-chevron-down float-right mr-[15px]"></i>
                <div class="w-[100%] bg-[#f4f6fa]" id="slot-li" style="display:none">   
                    <div class="li-in" onclick="getPage('allLocation');"> - View Location</div>
                    <div class="li-in" onclick="getPage('allSlot');"> - View Slot</div>
                </div>
            </li>
                
            <li class="side-links" onclick="expandLink('settings');"  title="System Settings">  <i class="bi-gear text-[#3a4669] mr-[6px]"></i> System Settings  <i class="bi bi-chevron-down float-right mr-[15px]"></i>
                <div class="w-[100%] bg-[#f4f6fa]" id="settings-li" style="display:none">   
                    <div class="li-in" onClick="getForm('passForm');"> - Change Your Password</div>
                </div>
            </li>

            <li class="side-links" onclick="logOut();"><i class="bi-power text-[#3a4669] mr-[6px]"></i> Log-Out</li>
        </ul>
    </div>
</nav>



