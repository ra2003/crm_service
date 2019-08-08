Search.setIndex({docnames:["authentication","customer","index","install","modules","server","server.controller","server.model","server.service","server.util","support","user"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,sphinx:56},filenames:["authentication.rst","customer.rst","index.rst","install.rst","modules.rst","server.rst","server.controller.rst","server.model.rst","server.service.rst","server.util.rst","support.rst","user.rst"],objects:{"":{"/auth/login":[0,0,1,"post--auth-login"],"/customers":[6,0,1,"post--customers"],"/customers/":[6,1,1,"get--customers-"],"/customers/(int:customer_id)":[6,3,1,"put--customers-(int-customer_id)"],"/users":[11,0,1,"post--users"],"/users/":[11,1,1,"get--users-"],"/users/(int:user_id)":[11,3,1,"put--users-(int-user_id)"],"/users/(int:user_id)/change-admin-status":[11,3,1,"put--users-(int-user_id)-change-admin-status"],"/users/(int:user_id)/change-password":[11,3,1,"put--users-(int-user_id)-change-password"]},"server.controller":{auth_controller:[0,4,0,"-"],customer_controller:[6,4,0,"-"],user_controller:[11,4,0,"-"]},"server.controller.auth_controller":{login:[0,5,1,""]},"server.controller.customer_controller":{delete_customer:[6,5,1,""],get_all_customers:[6,5,1,""],get_customer:[6,5,1,""],post_customer:[6,5,1,""],put_customer:[6,5,1,""]},"server.controller.user_controller":{change_admin_status:[11,5,1,""],change_user_password:[11,5,1,""],delete_user:[11,5,1,""],get_all_users:[11,5,1,""],get_user:[11,5,1,""],post_user:[11,5,1,""],put_user:[11,5,1,""]},"server.model":{customer:[7,4,0,"-"]},"server.model.customer":{Customer:[7,6,1,""]},"server.model.customer.Customer":{created_at:[7,7,1,""],created_by:[7,7,1,""],email:[7,7,1,""],id:[7,7,1,""],is_deleted:[7,7,1,""],last_modified_at:[7,7,1,""],last_modified_by:[7,7,1,""],name:[7,7,1,""],photo_url:[7,7,1,""],surname:[7,7,1,""]},"server.service":{customer_service:[8,4,0,"-"]},"server.service.customer_service":{"delete":[8,5,1,""],all_customers:[8,5,1,""],create_customer:[8,5,1,""],get_a_customer:[8,5,1,""],update_customer:[8,5,1,""]},"server.util":{decorator:[9,4,0,"-"]},"server.util.decorator":{check_admin_token:[9,5,1,""],check_user_token:[9,5,1,""],process_token:[9,5,1,""]},server:{controller:[6,4,0,"-"],model:[7,4,0,"-"],service:[8,4,0,"-"],util:[9,4,0,"-"]}},objnames:{"0":["http","post","HTTP post"],"1":["http","get","HTTP get"],"2":["http","delete","HTTP delete"],"3":["http","put","HTTP put"],"4":["py","module","Python module"],"5":["py","function","Python function"],"6":["py","class","Python class"],"7":["py","attribute","Python attribute"]},objtypes:{"0":"http:post","1":"http:get","2":"http:delete","3":"http:put","4":"py:module","5":"py:function","6":"py:class","7":"py:attribute"},terms:{"class":7,"function":[0,1,6,11],"int":[1,6,11],"return":[1,6,11],The:[1,6,11],admin:11,all:[1,6,11],all_custom:8,api:7,auth:0,authent:[1,2,4,6,11],author:[1,6,11],base:7,bearer:[1,6,11],bodi:[0,1,6,11],can:[1,6,11],chang:11,change_admin_statu:11,change_user_password:11,check:0,check_admin_token:9,check_user_token:9,com:[0,1,6,11],content:[2,5],control:5,creat:[1,6,11],create_custom:8,created_at:7,created_bi:7,custom:[2,4,6],customer_control:5,customer_id:[1,6,8],data:[1,6,8,11],databas:0,declar:7,delet:[1,6,8,11],delete_custom:[1,6],delete_us:11,dict:[1,6,11],email:[0,1,6,7,11],end:2,endpoint:[1,6,11],exampl:[0,1,6,11],ext:7,func:9,gener:0,get:[1,6,11],get_a_custom:8,get_all_custom:[1,6],get_all_us:11,get_custom:[1,6],get_us:11,given:[0,1,6,11],grant:11,header:[0,1,6,11],index:2,inform:11,instal:2,is_delet:7,its:11,kwarg:7,last_modified_at:7,last_modified_bi:7,list:[1,6,11],login:0,modul:[2,5],must:11,name:[0,1,6,7,11],new_pass:11,new_password:11,old_pass:11,old_password:11,onli:[1,6,11],packag:5,page:[2,3,10],paramet:[1,6,11],pass:[1,6,11],password:[0,11],photo_url:7,point:2,post:[0,1,6,11],post_custom:[1,6],post_us:11,privileg:11,process:3,process_token:9,progress:10,protect:[1,6,11],put:[1,6,11],put_custom:[1,6],put_us:11,reqhead:[1,6,11],request:[1,6,11],revok:11,search:2,send:11,sent:[1,6,11],server:5,sqlalchemi:7,statu:11,submodul:5,support:2,surnam:[1,6,7,11],thi:[1,6,11],through:[1,6,11],token:[0,1,6,9,11],type:[1,6,11],updat:[1,6,11],update_custom:8,use:[1,6,11],user:[0,1,2,4,6],user_id:11,you:11},titles:["Authentication","Customer","Welcome to Flask CRM\u2019s documentation!","Installation","End Points","End points","server.controller package","server.model package","server.service package","server.util package","Support","User"],titleterms:{api:2,authent:0,content:[6,7,8,9],control:6,crm:2,custom:[1,7],customer_control:6,customer_servic:8,decor:9,document:2,end:[4,5],flask:2,indic:2,instal:3,model:7,modul:[6,7,8,9],packag:[6,7,8,9],point:[4,5],refer:2,server:[6,7,8,9],servic:8,submodul:[6,7,8,9],support:10,tabl:2,user:11,util:9,welcom:2}})