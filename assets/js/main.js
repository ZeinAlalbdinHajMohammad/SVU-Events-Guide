function filterHomeEvents(category) {                                                   // function for the quick filter in the
    var homeCards = document.getElementsByClassName("home-event-box");                  // home page to bring all the cards

    for (var i = 0; i < homeCards.length; i++) {                                        // and check the category of each card
        var cardCategory = homeCards[i].querySelector(".home-event-category").innerText;// if it matches the button that the user

        if (category === "all" || cardCategory === category) {                          // pressed we show it and if not we hide it
            homeCards[i].style.display = "block";
        } else {
            homeCards[i].style.display = "none";
        }
    }
}

function filterEvents() {                                                               // function to filter the events in the
    var selectedCategory = document.getElementById("categorySelect").value;             // events page by taking the values of
    var selectedLocation = document.getElementById("locationSelect").value;             // category and location and date inputs
    var selectedDate = document.getElementById("dateInput").value;

    var events = document.getElementsByClassName("event-box");

    for (var i = 0; i < events.length; i++) {                                           // loop on all the event cards to read
        var categoryText = events[i].querySelector(".event-category").innerText;        // the text of category and city and date
        var locationText = events[i].querySelector(".event-location").innerText;        // written inside every card
        var dateText = events[i].querySelector(".event-date").innerText;

        var showEvent = true;

        if (selectedCategory !== "all" && categoryText !== selectedCategory) {          // compare the card data with what the
            showEvent = false;                                                          // user chose in the filter bar and if
        }                                                                               // any condition is different we make

        if (selectedLocation !== "all" && locationText !== selectedLocation) {          // the show variable false
            showEvent = false;
        }

        if (selectedDate !== "" && dateText !== selectedDate) {
            showEvent = false;
        }

        if (showEvent === true) {                                                       // show the card if it matches all choices
            events[i].style.display = "block";                                          // or hide it from the page
        } else {
            events[i].style.display = "none";
        }
    }
}

onload = function () {                                                                  // when the page opens we run the function
    loadEventDetails();                                                                 // that loads the event details

    function loadEventDetails() {

        var titleEl = document.getElementById("detailTitle");                          

        var currentUrl = location.href;                                                 // read the link of the page to know
        var imgEl = document.getElementById("detailImg");                               // the id number of the chosen event
        var categoryEl = document.getElementById("detailCategory");
        var infoEl = document.getElementById("detailInfo");
        var descEl = document.getElementById("detailDesc");
        var addressEl = document.getElementById("detailAddress");


        if (currentUrl.indexOf("id=2") !== -1) {                                        // check the id number in the link using
            imgEl.src = "assets/img/event2.jpg";                                        // if conditions to change the picture
            categoryEl.innerText = "تقنية وعلمية";                                     // and the title and the description
            titleEl.innerText = "ورشة عمل أساسيات تصميم الويب";                       // according to the event that the user
            infoEl.innerText = "التاريخ: 2026-11-12 | الوقت: 02:00 ظهراً | المكان: مركز نفاذ حلب";
            descEl.innerText = "ورشة تدريبية عملية مخصصة للطلاب المبتدئين لتعلم بناء صفحات ويب متجاوبة باستخدام HTML و CSS ومكتبة Bootstrap.";
            addressEl.innerText = "حلب - حرم الجامعة - مركز نفاذ الجامعة الافتراضية السورية.";
        } else if (currentUrl.indexOf("id=3") !== -1) {
            imgEl.src = "assets/img/event3.jpg";
            categoryEl.innerText = "ثقافة";
            titleEl.innerText = "معرض تبادل الكتب الجامعية";
            infoEl.innerText = "التاريخ: 2026-11-15 | الوقت: 11:00 صباحاً | المكان: مركز نفاذ اللاذقية";
            descEl.innerText = "فعالية طلابية ثقافية تهدف إلى تبادل الكتب الدراسية والمراجع والروايات بين طلاب الجامعة بشكل مجاني.";
            addressEl.innerText = "اللاذقية - مركز نفاذ الجامعة الافتراضية السورية.";
        } else if (currentUrl.indexOf("id=4") !== -1) {
            imgEl.src = "assets/img/event4.jpg";
            categoryEl.innerText = "رياضة";
            titleEl.innerText = "بطولة الشطرنج الجامعية";
            infoEl.innerText = "التاريخ: 2026-11-20 | الوقت: 01:00 ظهراً | المكان: مركز نفاذ حمص";
            descEl.innerText = "منافسات فردية ودية في لعبة الشطرنج لجميع طلاب الجامعة الافتراضية مع تكريم الفائزين بالمراكز الأولى.";
            addressEl.innerText = "حمص - مركز نفاذ الجامعة الافتراضية السورية.";
        } else if (currentUrl.indexOf("id=5") !== -1) {
            imgEl.src = "assets/img/event5.jpg";
            categoryEl.innerText = "موسيقى وفنون";
            titleEl.innerText = "أمسية المواهب الطلابية";
            infoEl.innerText = "التاريخ: 2026-11-25 | الوقت: 04:00 عصراً | المكان: دمشق - المدرج الرئيسي";
            descEl.innerText = "أمسية فنية لعرض مواهب الطلاب في العزف الموسيقي والرسم والتصميم الفني بحضور الطلاب والأساتذة.";
            addressEl.innerText = "دمشق - المزة - مبنى الجامعة الافتراضية السورية.";
        } else if (currentUrl.indexOf("id=6") !== -1) {
            imgEl.src = "assets/img/event6.jpg";
            categoryEl.innerText = "عائلي واجتماعي";
            titleEl.innerText = "لقاء الخريجين السنوي";
            infoEl.innerText = "التاريخ: 2026-11-28 | الوقت: 03:00 عصراً | المكان: مركز نفاذ طرطوس";
            descEl.innerText = "لقاء اجتماعي ودي يجمع خريجي الجامعة وعائلاتهم مع الطلاب الحاليين لتبادل الخبرات والنصائح المهنية.";
            addressEl.innerText = "طرطوس - مركز نفاذ الجامعة الافتراضية السورية.";
        }
    }
}

function addToCalendar() {                                                              // functions for the two buttons in the
    var alertBox = document.getElementById("eventActionAlert");                         // details page to show a green bootstrap
    if (alertBox) {                                                                     // alert message when clicking on add to
        alertBox.innerText = "تمت إضافة موعد الفعالية إلى تذكيرات تقويمك بنجاح.";   // calendar or share button
        alertBox.classList.remove("d-none");
    }
}

function shareEvent() {
    var alertBox = document.getElementById("eventActionAlert");
    if (alertBox) {
        alertBox.innerText = "تم نسخ رابط الفعالية لمشاركته مع زملائك في الجامعة.";
        alertBox.classList.remove("d-none");
    }
}
function validateContactForm() {                                                        // function to check the inputs of the
    var name = document.getElementById("userName").value;                               // contact form before sending the message
    var email = document.getElementById("userEmail").value;
    var message = document.getElementById("userMessage").value;
    var alertBox = document.getElementById("alertBox");

    if (name === "" || email === "" || message === "") {                                // show red alert if any field is empty
        alertBox.innerHTML = '<div class="alert alert-danger">يرجى تعبئة جميع الحقول المطلوبة.</div>';
        return;
    }

    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {                       // or if the email does not have @ and dot
        alertBox.innerHTML = '<div class="alert alert-danger">يرجى إدخال بريد إلكتروني بصيغة صحيحة.</div>';
        return;
    }

    alertBox.innerHTML = '<div class="alert alert-success">تم إرسال رسالتك بنجاح، شكراً لتواصلك معنا.</div>';
    document.getElementById("contactForm").reset();                                     // otherwise show success alert and clear form
}