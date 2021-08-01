function Edit(){
    
	tbClients[selected_index] = JSON.stringify({
        ID    : uuidv4(),
        Name  : $("#txtName").val(),
        Phone : $("#txtPhone").val(),
        Address : $("#txtLocation").val(),
        Postal : $("#txtPostal").val()
		});//Edit Data Yang Dipilih
	localStorage.setItem("tbClients", JSON.stringify(tbClients));
	alert("The data was edited.")
	operation = "A"; //Return default value
    List()
    Clear()
	// return true;
} 

function Clear()
{
    uuidv4().val('');
	$("#txtName").val('');
	$("#txtPhone").val('');
	$("#txtLocation").val('');
    $("#txtPostal").val('');
	$("#txtID").prop("readonly",false);
}

function List(){	
    $("#tblList").html("");
    $("#tblList").html(
    `<div class="forms-container">
    <div class="login-signup">
        <form action="#" class="login-form">

        </form>

        <form action="#" class="signup-form">
                        <h2 class="title">Edit Profile</h2>
                        <div class="input-field input-fieldEdit">
                            <i class="far fa-user"></i>
                            <input type="text" id="txtName"/>
                        </div>
                        <div class="input-field input-fieldEdit">
                            <i class="fas fa-phone"></i>
                            <input type="text" id="txtPhone"/>
                        </div>
                        <div class="input-field input-fieldEdit">
                            <i class="fas fa-map-marker-alt"></i>
                            <input type="text" id="txtLocation"/>
                        </div>
                        <div class="input-field input-fieldEdit">
                            <i class="fas fa-mail-bulk"></i>
                            <input type="text" id="txtPostal"/>
                        </div>
                        <input type="submit" value='Save Changes' class="btn solid" id="btnSave" />
                    </form>
    </div>
    <div class="profileList-container">
                    <div class="setting">
                        <i class="fas fa-cog"></i>
                        <a class="link-setting" href="#">Setting</a>
                    </div>
                    <div class="notifications">
                        <i class="far fa-bell"></i>
                        <a class="link-notifications" href="#">Notifications</a>
                    </div>
                    <div class="logout">
                        <i class="fas fa-sign-out-alt"></i>
                        <a href="login-signup.html" class="link-logout">Log out</a>
                    </div>
                </div>
    </div>`
    );
    for(var i in tbClients){
		var cli = JSON.parse(tbClients[i]);
        $("#tblList .login-form").append(
            "<h2 class='title'>My Profile</h2>" +
           "<div class='input-field'>" +
                "<i class='fas fa-user'></i>"+
                "<p>"+cli.Name+"</p>" +
            "</div>" +
            "<div class='input-field'>" +
                "<i class='fas fa-phone'></i>"+
                "<p>"+cli.Phone+"</p>" +
            "</div>" +
            "<div class='input-field'>" +
                "<i class='fas fa-map-marker-alt'></i>" +
                "<p>"+cli.Address+"</p>" +
            "</div>" +
            "<div class='input-field'>" +
                "<i class='fas fa-mail-bulk'></i>" +
                "<p>"+cli.Postal+"</p>" +
            "</div>" +

            "<button class='btnEdit btn' data-id="+i+">Edit Profile</button>" 
            
        );
        const sign_in_btn = document.querySelector("#btnSave");
        const sign_up_btn = document.querySelector(".btnEdit");
        const container = document.querySelector(".container");

        sign_up_btn.addEventListener("click", () => {
        container.classList.add("sign-up-mode");
        });

        sign_in_btn.addEventListener("click", () => {
        container.classList.remove("sign-up-mode");
        });
    }
}

