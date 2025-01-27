const express=require("express")
const app=express()
const bodyParser=require("body-parser");
const https=require("https");
app.use(bodyParser.urlencoded({extended:true}));


// --------------STATIC FILES---------------
app.use(express.static("public"))


// ------------------GET-------------------
app.get("/",function(req,res){
    res.status(200).sendFile(__dirname+"/index.html")
})
app.get("/chart", function(req,res){
    res.status(200).sendFile(__dirname+'/chart.html')
})

app.get("*", (req, res) => {
    res.status(404).send("<h1>404 - Page Not Found</h1><p>Sorry, the page you're looking for does not exist.</p>")
})


// ------------------POST--------------------------
app.post("/",function(req,res){
    var weight = parseFloat(req.body.weight)
    var height = parseFloat(req.body.height)
    var BMI = weight/(height*height) 
    if (height<=3){
           weight=weight
    } else if (height>3 && height<10){
        height=(height/3.281)
    } else{
        height=(height/100)
    }
    var BMI = weight/(height*height);
    var BMI = BMI.toFixed(2)
    res.status(200).write('<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content=""><meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors"><meta name="generator" content="Hugo 0.108.0"><title>BMI-Calculator</title><link rel="canonical" href="https://getbootstrap.com/docs/5.3/examples/sign-in/"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-aFq/bzH65dt+w6FI2ooMVUpc+21e0SRygnTpmBvdBgSdnuTN7QbdgL+OapgHtvPp" crossorigin="anonymous"><link rel="manifest" href="https://getbootstrap.com/docs/5.3/assets/img/favicons/manifest.json"><link rel="mask-icon" href="https://getbootstrap.com/docs/5.3/assets/img/favicons/safari-pinned-tab.svg" color="#712cf9"><link href="data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC5j6/wuY+v8LmPr/C5j6/wuY+v8LmPr/1tbW/9bW1v/W1tb/1tbW/9bW1v/W1tb/AAAAAAAAAAAAAAAAC5j6hAuY+v8LmPr/C5j6/wuY+v8LmPr/C5j6/9nZ2f/Z2dn/2dnZ/9nZ2f/Z2dn/2dnZ/+zs7AwAAAAAAAAAAAuY+v8LmPr/C5j6/23B/P9twfz/C5j6/wuY+v/c3Nz/3Nzc/3h4eP94eHj/qqqq/9zc3P/t7e1/AAAAAAAAAAALmPr/C5j6/wuY+v9uwvz/bMH8/wuY+v8LmPr/39/f/9/f3/94eHj/eHh4/6urq//f39//7+/vfwAAAAAAAAAAC5j6/wuY+v8LmPr/C5j6/wuY+v8LmPr/C5j6/+Li4v/i4uL/4uLi/+Li4v/i4uL/4uLi//Dw8H8AAAAAAAAAAAuY+v8LmPr/C5j6/wuY+v8LmPr/C5j6/wuY+v/l5eX/5eXl/+Xl5f/l5eX/5eXl/+Xl5f/y8vJ/AAAAAAAAAAALmPr/C5j6/wuY+v8LmPr/C5j6/wuY+v8LmPr/C5j6/wuY+v8LmPr/C5j6/wuY+v8LmPr/hcv8fwAAAAAAAAAAC5j6/wuY+v8LmPr/C5j6/wuY+v8LmPr/C5j6/wuY+v8LmPr/C5j6/wuY+v8LmPr/C5j6/4XL/H8AAAAAAAAAAAuY+v8LmPr/C5j6/8Xn/v8LmPr/C5j6/wuY+v8LmPr/C5j6/wuY+v8LmPr/C5j6/wuY+v+Fy/x/AAAAAAAAAAALmPr/C5j6/2i//P/x+f7/xuf+/wuY+v8LmPr/C5j6/wuY+v/G5/7/xuf+/2i//P8LmPr/hcv8fwAAAAAAAAAAC5j62wuY+v8LmPr/aL/8/wuY+v8LmPr/C5j6/wuY+v8LmPr/C5j6/wuY+v8LmPr/C5j6/4XL/FsAAAAAAAAAAAAAAAALmPr/C5j6/wuY+v8LmPr/C5j6/wuY+v8LmPr/C5j6/wuY+v8LmPr/C5j6/wuY+v8AAAAAAAAAAAAAAAAAAAAAAAAAAAuY+v8LmPr/C5j6/wuY+v8LmPr/C5j6/wuY+v8LmPr/C5j6/wuY+v8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8AAP//AADAAwAAgAMAAIADAACAAwAAgAMAAIADAACAAwAAgAMAAIADAACAAwAAgAMAAMADAADgBwAA//8AAA==" rel="icon" type="image/x-icon"><meta name="theme-color" content="#712cf9"><style>.bd-placeholder-img{font-size:1.125rem;text-anchor:middle;-webkit-user-select:none;-moz-user-select:none;user-select:none}@media (min-width:768px){.bd-placeholder-img-lg{font-size:3.5rem}}.b-example-divider{height:3rem;background-color:rgba(0,0,0,.1);border:solid rgba(0,0,0,.15);border-width:1px 0;box-shadow:inset 0 .5em 1.5em rgba(0,0,0,.1),inset 0 .125em .5em rgba(0,0,0,.15)}.b-example-vr{flex-shrink:0;width:1.5rem;height:100vh}.bi{vertical-align:-.125em;fill:currentColor}.nav-scroller{position:relative;z-index:2;height:2.75rem;overflow-y:hidden}.nav-scroller .nav{display:flex;flex-wrap:nowrap;padding-bottom:1rem;margin-top:-1px;overflow-x:auto;text-align:center;white-space:nowrap;-webkit-overflow-scrolling:touch}</style><link href="css/style.css" rel="stylesheet"></head><body class="text-center"><main class="form-signin w-100 m-auto"><form action="/" method="post"><div class="alert alert-warning alert-dismissible fade show" role="alert">Your Calculated BMI is<strong> '+BMI+'</strong><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div><img class="mb-4" src="https://cdn.iconscout.com/icon/premium/png-512-thumb/bmi-calculator-2751460-2283491.png?f=avif&w=256" alt="" width="auto" height="100"><div class="form-floating"><input type="number" step="any" autocomplete="off" class="form-control top removeScroller" name="weight" id="floatingInput" placeholder="Enter Weight" required><label for="floatingInput">Weight (Kg)</label></div><div class="form-floating"><input type="number" step="any" autocomplete="off" class="form-control bottom removeScroller" name="height" id="floatingInput" placeholder="Enter Height" required><label for="floatingInput">Height (ft/cm/m)</label></div><button class="w-100 btn btn-lg btn-warning" type="submit">Calculate BMI!</button></form><a href="/chart"><button class="w-100 btn btn-outline-success mt-3">BMI Chart</button></a><p class="mt-5 mb-2"><a href="https://bit.ly/jashgro"><button class="btn">&copy;JashGro</button></a></p><a href="https://github.com/BlackHatDevX/BMI-Calculator-Node"><button class="btn btn-sm btn-outline-secondary">Source Code<i class="fa fa-github"></i></button></a></main><script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script></body></html>')
    res.send()
})



// -----------------LISTEN------------------------
app.listen(process.env.PORT || 3000,function(){
    console.log("Listening at port 3000");
})
