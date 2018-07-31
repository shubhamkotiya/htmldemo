 index=10;         

$(document).ready(function(){
           
  var editData=[];
  var userAllData=[]; 
  
  // hide and show
  $("a#login").on('click', function () {
    $(".login_form").show();
    $(".signup_form").hide();
    $(".table").hide();

  });
  $("a#signup").on('click', function () {
    $(".signup_form").show();
    $(".login_form").hide();
    $(".table").hide();
  });

  $("a#home").on('click', function (evtq) {
    evtq.preventDefault(); 
    $(".signup_form").hide();
    $(".login_form").hide();
    $(".table").show();
  });


//for table search
  $("#search").on("keyup", function() {
    index1=$("table>tbody>tr").length;
    var value = $(this).val().toLowerCase();
      $("tbody tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
  });
//for registration validation.
  $("#signup_res").submit(function(evt){
    // debugger
    evt.preventDefault();
    var index1 = $("table>tbody>tr").length;
    //var userAllData=[];
    var result=true;
    var id1=++index1;
    var name1 = $("#name").val();
    var email = $("#email").val();
    var pass = $("#password").val();
    var cpass = $("#cpassword").val();
    var mobile = $("#mobile").val();
    if(!isNaN(name1)){
      $("span#name").text("** Name Should be Charater");
      return false;
    }
    if(pass.length<7){
      $("span#password").text("** Minimum pssword length 8");
      return false;
    }
    if(pass!=cpass){
      $("span#cpassword").text("** Password not match");
      return false;
    }
    if(isNaN(mobile)){
      $("span#mobile").text("** Should be Number");
      return false;
    }
    if(mobile.length!=10){
      $("span#mobile").text("** Should be 10 digit");
      return false;
    }
    for(var i=0;i<userAllData.length;i++){
      if(email==userAllData[i].email)
      {
         result=false;
        alert("account already exist");
        break;
      }
      
    }
    
    if(result==false)
    {
      $("#signup_res")[0].reset();
      return false;
    }
    user={
      id1 : $("table>tbody>tr").length+1,
      name1 :  $("#name").val(),
      email : $("#email").val(), 
      mobile : $("#mobile").val(),
      pass :  $("#password").val()
    }
    userAllData.push(user);
    var markup="<tr><td>"+userAllData[index].id1+"</td><td>"+userAllData[index].name1+"</td><td>"+userAllData[index].email+"</td><td>"+userAllData[index].mobile+"</td><td><button type='button' class='editData'>edit</button></td></tr>";
    $("table tbody").append(markup);
     index++;
    //for peform edit on new data
    callEditModal();
    alert("successFully account is created");
    $("#signup_res")[0].reset();
    $(".login_form").show();
    $(".signup_form").hide();
    $(".Table").hide();
    
  
  });
  // log in validation 

  $("#loginForm").submit(function(ev){
    ev.preventDefault();
    var result=false;
    loginName=$("#Login_email").val();
    loginPass=$("#Login_password").val();
    for(var i=0;i<userAllData.length;i++){
      if(loginName==userAllData[i].email && loginPass==userAllData[i].pass)
      {
        result=true;
        alert("login succesfull");
        $("#loginForm")[0].reset();
        $(".table").show();
        $(".login_form").hide();
        break;
      }
      
    }
    if(result==false){
      alert("id and password not match");
      $("#loginForm")[0].reset();
      $(".login_form").show();
    }  
  });
  //to edit old data
  callEditModal();        
});

function callEditModal(){
  $(".editData").on("click",function(event){
    event.preventDefault();
    $('#editModal').modal('show');
     userData = $(this).closest('td').siblings();
    $("#e_name").val(userData[1].innerHTML);
    $("#e_email").val(userData[2].innerHTML);
    $("#e_mobile").val(userData[3].innerHTML);
  });
  $("#editContent").submit(function(ev){
    ev.preventDefault();
    name = $("#e_name").val();
    email = $("#e_email").val();
    mobile = $("#e_mobile").val();
    userData[1].innerHTML = name;
    userData[2].innerHTML = email;
    userData[3].innerHTML =mobile;
     $('#editModal').modal('hide');
     $(".Table").show();
  });
}

