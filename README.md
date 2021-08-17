# 📒 Mapmory

#### Mapmory provides location-based recording sevices utilizing Google Maps API.


### Mapmory functions
-----------------
- [x] Register
- [x] Log in/out
- [x] Member information edit
- [x] Create your memories(With Title, Date, Author, Address)
- [x] Delete your memories
- [x] Save your memory with map
- [x] Show your memory with map
- [x] Edit your memory with map
- [x] Search your memories


### Development environment
-----------------
+ Front end : EJS template engine
+ Back end : Express/NodeJS
+ Database : Mongo DB
+ Server : AWS EC2

### Open source API
-----------------
+ [Google map api](https://developers.google.com/maps/documentation/javascript/overview?hl=ko)


## ✏️ Quick Start (build, install, setup manual)

    $ git clone http://khuhub.khu.ac.kr/2017101294/Mapmory.git
    $ cd Mapmory
    $ npm install

----------------
    Input google map key(partials/showmap.ejs and partials/gmap.ejs)
   <img src = "https://user-images.githubusercontent.com/73929383/120812504-fd8c0180-c587-11eb-9258-e99adec55714.PNG" width="550" height = "110">

    Input Mongo key(index.js)
   <img src = "https://user-images.githubusercontent.com/73929383/120812932-696e6a00-c588-11eb-8a07-ce2b22ff09c0.PNG" width="550" height = "100">

    Input Port number(index.js)
   <img src= "https://user-images.githubusercontent.com/73929383/120813437-d7b32c80-c588-11eb-9d52-4ef570212d85.PNG" width = "550" height = "120">


    $ node index.js

----------------

<br/>
----------------
If  ``` node index.js ```  does not work well

    $ npm install nodemon-g

At package.json, add  ``` "start" : "nodemon index.js" ```

    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start" : "nodemon index.js"
    }

    $ npm start
----------------

### Dependency
-----------------
+ bcryptjs : 2.4.3,
+ body-parser : 1.19.0,
+ connect-flash : 0.1.1,
+ ejs : 3.1.6,
+ express : 4.17.1,
+ express-session : 1.17.1,
+ method-override : 3.0.0,
+ mongoose : 5.12.8,
+ passport : 0.4.1,
+ passport-local : 1.0.0


### 👬 Team members
-----------------
+ Im Taemin (@devTaemin)
+ Hong Jiyoon (@fheldgktpdy)
