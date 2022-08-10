function generateManager() {
    return `
            <div class=col-3 card">
                <div class="card-header bg-primary text-light">
                    <h2>Dave</h2>
                    <h3>Manager</h3>
                </div>
                <div class="card-body">
                    <h4>id: 1</h4>
                    <h4>dave@g.com</h4>
                    <h4>Office Number: 1</h4>
                </div>
            </div>
    `;
};

function generateEngineer() {
    return `
            <div class="col-3 card">
                <div class="card-header bg-primary text-light">
                    <h2>Greg</h2>
                    <h3>Engineer</h3>
                </div>
                <div class="card-body">
                    <h4>id: 2</h4>
                    <h4>greg@g.com</h4>
                    <h4>github: daveg</h4>
                </div>
            </div>
    `;
};

function generateIntern () {
    return `
            <div class="col-3 card">
                <div class="card-header bg-primary text-light">
                    <h2>Sean</h2>
                    <h3>Intern</h3>
                </div>
                <div class="card-body">
                    <h4>id:3</h4>
                    <h4>sean@g.com</h4>
                    <h4>School: SMU</h4>
                </div>
            </div>
    `;
};

module.exports = memberData => {
    // desctructure members from memberdata
    const { engineers, interns, ...header } = memberData;

    return `
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
            ${generateManager(header)}
            ${generateEngineer(engineers)}
            ${generateIntern(interns)}
        </div>
    </main>
    <footer>
        <p>Made with love by swvmpdad.</p>
    </footer>
</body>
</html>
    `;
};