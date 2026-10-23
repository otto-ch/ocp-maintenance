export default {
  async fetch(request, env, ctx) {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ottocarparts.com Site Maintenance</title>
    <style>
        body { 
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; 
            color: #333; 
            text-align: center; 
            padding: 80px 20px; 
            background-color: #f8f9fa;
            margin: 0;
        }
        article { 
            display: block; 
            text-align: left; 
            width: 100%; 
            max-width: 650px; 
            margin: 0 auto; 
            background: #fff;
            padding: 40px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }
        .logo-container {
            margin-bottom: 25px;
            text-align: center;
        }
        h1 { 
            font-size: 32px; 
            margin-top: 20px;
            color: #222;
        }
        p {
            font-size: 18px;
            line-height: 1.6;
            color: #555;
        }
        a { 
            color: #dc8100; 
            text-decoration: none; 
            font-weight: bold;
        }
        a:hover { 
            color: #333; 
            text-decoration: underline; 
        }
        .phone {
            font-weight: bold;
            color: #333;
        }
    </style>
</head>
<body>
<article>
    <div class="logo-container">
     <img src="https://cdn.jsdelivr.net/gh/otto-ch/ocp-maintenance/logo.png" alt="Otto Car Parts Logo"/>

    </div>
    <h1>We&rsquo;ll be back soon!</h1>
    <div>
        <p>Sorry for the inconvenience, but we&rsquo;re performing some routine maintenance at the moment. If you need immediate assistance, you can <a href="mailto:sales@otto.ie">contact us via email</a>, or call us on <span class="phone">+353-1-4000058</span>.</p>
        <p>Otherwise, we&rsquo;ll be back online shortly!</p>
        <p>&mdash; The OTTO Team</p>
    </div>
</article>
</body>
</html>`;

    return new Response(html, {
      status: 503,
      statusText: 'Service Unavailable',
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Retry-After': '3600'
      }
    });
  }
};