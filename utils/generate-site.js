const fs = require('fs');

// Create Engineer Cards
function generateEngineer(engineersArr) {
    return `${engineersArr.engineers.map(({ name, id, email, github }) => {
        return `<div class="col-3 card">
                <div class="card-header bg-primary text-light">
                    <h2>${name}</h2>
                    <h3>Engineer</h3>
                </div>
                <div class="card-body">
                    <h4>id: ${id}</h4>
                    <h4><a href="mailto:${email}">${email}</a></h4>
                    <h4>github: <a href='https://github.com/${github}'>${github}</a></h4>
                </div>
            </div>`;
    }).join('')}`;
};

// Create Intern Cards
function generateIntern(internsArr) {
    return `${internsArr.interns.map(({ name, id, email, school }) => {
    return `<div class="col-3 card">
                <div class="card-header bg-primary text-light">
                    <h2>${name}</h2>
                    <h3>Intern</h3>
                </div>
                <div class="card-body">
                    <h4>id: ${id}</h4>
                    <h4><a href="mailto:${email}">${email}</a></h4>
                    <h4>School: ${school}</h4>
                </div>
            </div>`;
}).join('')}`;
};

// Create the index.html file
const writeFile = memberData => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html',
        `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    <title>Go Team!</title>
</head>
<body>
    <header class="text-center mb-5 bg-danger text-light">
        <h1>The Team</h1>
    </header>
    <main class="container align-items-center">
        <div class="row">
        <div class=col-3 card">
        <div class="card-header bg-primary text-light">
        <h2>${memberData.managerName}</h2>
        <h3>Manager</h3>
    </div>
    <div class="card-body">
        <h4>id: ${memberData.id}</h4>
        <h4><a href="mailto:${memberData.email}">${memberData.email}</a></h4>
        <h4>Office Number: ${memberData.office}</h4>
    </div>
</div>
${generateEngineer(memberData)}
${generateIntern(memberData)}
</div>
    </main>
    <footer>
        <p>Made with love by swvmpdad.</p>
    </footer>
</body>
</html>
    `
    , err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

module.exports = writeFile;