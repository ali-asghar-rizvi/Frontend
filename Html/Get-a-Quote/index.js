
	$(document).ready(function(){
    	    
    	    
            setInterval(function () {
                 $('#exampleModal-2').modal('show');
            }, 15000);
        }); 
        






<!--Modal down 10-sep-2022-->
 <script type="text/javascript">
    $(document).ready(function(){
        $("#autoload").trigger("click");
        $('#form2').hide();
        $('#form3').hide();
        $('#form4').hide();
        $('#form5').hide();
        $('#form6').hide();
        $('#backbtn').hide();
    });

     let i=1;
     function Nextfun() {
//         // body...
//         if(i<6){
//           i++; 
//         }
        
//         if(i==1){
//             $("#changetopic").text('What is your web design requirement?');
//             $('#form1').show();
//             $('#form2').hide();
//             $('#form3').hide();
//             $('#form4').hide();
//             $('#form5').hide();
//             $('#form6').hide();
//             $('#backbtn').hide();
//             $('#nextbtn').show();
//         } else if(i==2){
//             $("#changetopic").text('What are your website needs?');
//             $('#form1').hide();
//             $('#form2').show();
//             $('#form3').hide();
//             $('#form4').hide();
//             $('#form5').hide();
//             $('#form6').hide();
//             $('#backbtn').show();
//             $('#nextbtn').show();
//         } else if(i==3){
//             $("#changetopic").text('What type of business is this for?');
//             $('#form1').hide();
//             $('#form2').hide();
//             $('#form3').show();
//             $('#form4').hide();
//             $('#form5').hide();
//             $('#form6').hide();
//             $('#backbtn').show();
//             $('#nextbtn').show();
//         } else if(i==4){
//             $("#changetopic").text('What industry do you operate in?');
//             $('#form1').hide();
//             $('#form2').hide();
//             $('#form3').hide();
//             $('#form4').show();
//             $('#form5').hide();
//             $('#form6').hide();
//             $('#backbtn').show();
//             $('#nextbtn').show();
//         } else if(i==5){
//             $("#changetopic").text('What is your estimated budget for this project?');
//             $('#form1').hide();
//             $('#form2').hide();
//             $('#form3').hide();
//             $('#form4').hide();
//             $('#form5').show();
//             $('#form6').hide();
//             $('#backbtn').show();
//             $('#nextbtn').show();
//         } else if(i==6){
//             $("#changetopic").text('GET A FREE QUOTE NOW');
//             $('#form1').hide();
//             $('#form2').hide();
//             $('#form3').hide();
//             $('#form4').hide();
//             $('#form5').hide();
//             $('#form6').show();
//             $('#backbtn').show();
//             $('#nextbtn').hide();
//             $('#backbtn').addClass("backbtnwrp-l");
//         }
//     }
     function Backfun() {
//         // body...
//         if(i>1){
//             i--;
//         }
        
//         if(i==1){
//             $("#changetopic").text('What is your web design requirement?');
//             $('#form1').show();
//             $('#form2').hide();
//             $('#form3').hide();
//             $('#form4').hide();
//             $('#form5').hide();
//             $('#form6').hide();
//             $('#backbtn').hide();
//             $('#nextbtn').show();
//             $('#backbtn').removeClass("backbtnwrp-l");
//         } else if(i==2){
//             $("#changetopic").text('What are your website needs?');
//             $('#form1').hide();
//             $('#form2').show();
//             $('#form3').hide();
//             $('#form4').hide();
//             $('#form5').hide();
//             $('#form6').hide();
//             $('#backbtn').show();
//             $('#nextbtn').show();
//             $('#backbtn').removeClass("backbtnwrp-l");
//         } else if(i==3){
//             $("#changetopic").text('What type of business is this for?');
//             $('#form1').hide();
//             $('#form2').hide();
//             $('#form3').show();
//             $('#form4').hide();
//             $('#form5').hide();
//             $('#form6').hide();
//             $('#backbtn').show();
//             $('#nextbtn').show();
//             $('#backbtn').removeClass("backbtnwrp-l");
//         } else if(i==4){
//             $("#changetopic").text('What industry do you operate in?');
//             $('#form1').hide();
//             $('#form2').hide();
//             $('#form3').hide();
//             $('#form4').show();
//             $('#form5').hide();
//             $('#form6').hide();
//             $('#backbtn').show();
//             $('#nextbtn').show();
//             $('#backbtn').removeClass("backbtnwrp-l");
//         } else if(i==5){
//             $("#changetopic").text('What is your estimated budget for this project?');
//             $('#form1').hide();
//             $('#form2').hide();
//             $('#form3').hide();
//             $('#form4').hide();
//             $('#form5').show();
//             $('#form6').hide();
//             $('#backbtn').show();
//             $('#nextbtn').show();
//             $('#backbtn').removeClass("backbtnwrp-l");
//         } else if(i==6){
//             $("#changetopic").text('GET A FREE QUOTE NOW');
//             $('#form1').hide();
//             $('#form2').hide();
//             $('#form3').hide();
//             $('#form4').hide();
//             $('#form5').hide();
//             $('#form6').show();
//             $('#backbtn').show();
//             $('#nextbtn').hide();
            
//         }

//     }

</script>  















	 <!-- ------------------------------------------------------------------------ -->
<div class="container d-flex justify-content-center">
    <!-- Button to Open the Modal --> <button style="display:none"  type="button" id="autoload" class="btn btn-primary" data-toggle="modal" data-target="#myModal" id="Modal_button"> </button> <!-- The Modal -->
    <div class="modal fade" id="exampleModal-2" id="myModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <!-- Modal Header -->
                
             <div class="modal-header p-0">
                    <div class="head-img">
                    <img src="assets/images/modal-bg.jpg" width="100%;">
                    </div>
                 <button type="button" class="close head-top" data-dismiss="modal">&times;</button> 

             </div> <!-- Modal body -->
                <div class="modal-body mb-0 pb-0 mt-0">
                    <div class="container ">
                        <!-- custom radio button -->
                        <div class="holder">
                            <div class="row mb-1">
                                <div class="col">
                                    <h2 id="changetopic" >What is your web design requirement?</h2>
                                </div>
                            </div>
                            <form action="sendingg/index.php/" method="POST" class="customRadio customCheckbox m-0 p-0">
                                <div class="row mb-0">
                                    <div class="col-md-12">
                                        <div class="row justify-content-start">
                                        <div class="col-12" id="form1" >
                                            <div class="row"> 
                                                <input type="radio" name="requirement" value="Create a new website" id="q1"> <label for="q1"> Create a new website </label> 
                                            </div>
                                            <div class="row"> 
                                                <input type="radio" name="requirement" value="Major changes to my website" id="q2"> <label for="q2"> Major changes to my website </label> 
                                            </div>
                                            <div class="row"> 
                                                <input type="radio" name="requirement" value="Minor changes to my website" id="q3"> <label for="q3"> Minor changes to my website </label> 
                                            </div>
                                            <div class="row"> 
                                                <input type="radio" name="requirement" value="other" id="q100"> <label for="q100"> <input type="text" name="Message" id="" class="other-f form-control" placeholder="Other"> </label> 
                                            </div>
                                        </div>
                                        <div class="col-12" id="form2">
                                            <div class="row"> 
                                                <input type="radio" name="needs" value="To advertise my business/services" id="q4"> <label for="q4"> To advertise my business/services </label> 
                                            </div>
                                            <div class="row"> 
                                                <input type="radio" name="needs" value="To sell products/services e.g. e-commerce" id="q5"> <label for="q5">To sell products/services e.g. e-commerce</label> 
                                            </div>
                                            <div class="row"> 
                                                <input type="radio" name="needs" value="To offer bespoke functionality e.g. logins, forums, CRM" id="q6"> <label for="q6">To offer bespoke functionality e.g. logins, forums, CRM </label> 
                                            </div>
                                            <div class="row"> 
                                                <input type="radio" name="needs" id="q7" value="other"> <label for="q7"><input type="text" name="Message" id="" class="form-control other-f" placeholder="Other"></label> 
                                            </div>
                                        </div>
                                        <div class="col-12" id="form3">
                                            <div class="row"> 
                                                <input type="radio" name="business_info" id="q8" value="Personal project"> <label for="q8">Personal project</label> 
                                            </div>
                                            <div class="row"> 
                                                <input type="radio" name="business_info" id="q9" value="Sole trader/self-employed"> <label for="q9">Sole trader/self-employed</label> 
                                            </div>
                                            <div class="row"> 
                                                <input type="radio" name="business_info" id="q10" value="Small business (1 - 9 employees)"> <label for="q10"> Small business (1 - 9 employees) </label> 
                                            </div>
                                            <div class="row"> 
                                                <input type="radio" name="business_info" id="q11" value="Medium business (10 - 29 employees)"> <label for="q11"> Medium business (10 - 29 employees) </label> 
                                            </div>
                                            <div class="row"> 
                                                <input type="radio" name="business_info" id="q12" value="Large business (30 - 99 employees)"> <label for="q12"> Large business (30 - 99 employees) </label> 
                                            </div>
                                            <div class="row"> 
                                                <input type="radio" name="business_info" id="q13" value="Extra large business (100 or more employees)"> <label for="q13"> Extra large business (100 or more employees) </label> 
                                            </div>
                                            <div class="row"> 
                                                <input type="radio" name="business_info" id="q14" value="Charity/non-profit"> <label for="q14"> Charity/non-profit </label> 
                                            </div>
                                            <div class="row"> 
                                                <input type="radio" name="business_info" id="q15" value="other"> <label for="q15"> <input type="text" name="Message" id="" class="form-control other-f" placeholder="Other"> </label> 
                                            </div>
                                        </div>
                                        <div class="col-12" id="form4">
                                            <div class="row"> 
                                                <input type="radio" name="industry" id="q16" value="Business services"> <label for="q16">Business services</label> 
                                            </div>
                                            <!--<div class="row"> -->
                                            <!--    <input type="radio" name="industry" id="q17" value="Creative industries"> <label for="q17">Creative industries</label> -->
                                            <!--</div>-->
                                            <div class="row"> 
                                                <input type="radio" name="industry" id="q18" value="Entertainment & events"> <label for="q18"> Entertainment & events </label> 
                                            </div>
                                            <div class="row"> 
                                                <input type="radio" name="industry" id="q19" value="Financial services"> <label for="q19"> Financial services </label> 
                                            </div>
                                            <div class="row"> 
                                                <input type="radio" name="industry" id="q20" value="Health & fitness"> <label for="q20"> Health & fitness </label> 
                                            </div>
                                            <div class="row"> 
                                                <input type="radio" name="industry" id="q21" value="Home services"> <label for="q21"> Home services </label> 
                                            </div>
                                            <div class="row"> 
                                                <input type="radio" name="industry" id="q22" value="Restaurant/food"> <label for="q22"> Restaurant/food </label> 
                                            </div>
                                            <div class="row"> 
                                                <input type="radio" name="industry" id="q23" value="Retail/consumer goods"> <label for="q23"> Retail/consumer goods </label> 
                                            </div>
                                            <!--<div class="row"> -->
                                            <!--    <input type="radio" name="industry" id="q24" value="Technology/software"> <label for="q24"> Technology/software </label> -->
                                            <!--</div>-->
                                            <div class="row"> 
                                                <input type="radio" name="industry" id="q25" value="other"> <label for="q25"> <input type="text" name="Message" id="" class="form-control other-f" placeholder="Other"> </label> 
                                            </div>
                                        </div>
                                        <div class="col-12" id="form5">
                                            <div class="row"> 
                                                <input type="radio" name="price" id="q26" value="Less than $500"> <label for="q26">Less than $500</label> 
                                            </div>
                                            <div class="row"> 
                                                <input type="radio" name="price" id="q27" value="$500 - $999"> <label for="q27">$500 - $999</label> 
                                            </div>
                                            <div class="row"> 
                                                <input type="radio" name="price" id="q28" value="$1,000 - $1,999"> <label for="q28"> $1,000 - $1,999 </label> 
                                            </div>
                                            <div class="row"> 
                                                <input type="radio" name="price" id="q29" value="$1,000 - $1,999"> <label for="q29"> $1,000 - $1,999 </label> 
                                            </div>
                                            <div class="row"> 
                                                <input type="radio" name="price" id="q30" value="$3,000 - $4,999"> <label for="q30"> $3,000 - $4,999 </label>
                                            </div>
                                            <div class="row"> 
                                                <input type="radio" name="price" id="q31" value="$5,000 or more"> <label for="q31"> $5,000 or more </label>
                                            </div>
                                        </div>
                                        <div class="col-12" id="form6">
                                            <div class="row"> 
                                                <input type="text" name="cn" id="32" placeholder="Name" required class="form-control formtext"> <label for="32"></label> 
                                            </div>
                                            <div class="row">
                                                <input type="email" name="em" id="33" placeholder="Email" required class="form-control formtext"> <label for="33"></label> 
                                            </div>
                                            <div class="row"> 
                                                <input type="number" name="pn"  minlength="5" maxlength="11"  id="34" placeholder="Number" required class="form-control formtext"> <label for="34"></label>
                                            </div>
                                            <div class="row"> 
                                                <input type="submit" id="submitdata" name="submit" class="form-control formtext btn-success">
                                                <input class="" type="hidden" name="ctry" value="">
                                                <input type="hidden" name="cip" value="">
                                                <input type="hidden" name="hiddencapcha" value="">
                                            </div>
                                            <div class="row">
                                                <div class="btnwrp">
                                                    <a href="javascript:;" onclick="setButtonURL();">Chat Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div class="row mt-0 ml-4">
                                </div>
                                <div class="row mt-4"></div>
                            </form>
                        </div>
                    </div>
                </div> <!-- Modal footer -->
                <div class="modal-footer pt-0 mt-0 pb-5 pr-6 m-1 ">
                    <div class="col-2"> </div>
                    <div class="col-5 justify-content-start"></div>
                    <div class="col-2 justify-content-end ">
                        <!-- <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button> --> <button type="button" id="backbtn" onclick="Backfun()" class="btn btn-outline-light modal_footer backbtn-wrp">Back</button> </div>
                    <div class="col-3 justify-content-start m-0 p-0"> <button type="button" id="nextbtn" onclick="Nextfun()" class="respon btn btn-success box-shadow--16dp">Continue</button> </div>
                </div>
            </div>
        </div>
    </div>
</div>












