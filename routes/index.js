function homepage(request, response){
    return response.render('home');
}

function register(request, response){
    return response.render('register');
}

function makeRegistration(request, response){
    return response.render('register', { title: 'Registered', message: 'You Have Registered Successfully' });
}

exports.homepage = homepage;
exports.register = register;
exports.makeRegistration = makeRegistration;