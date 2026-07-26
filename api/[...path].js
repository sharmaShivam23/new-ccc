export default async function handler(req, res) {
  const { path, ...queryParams } = req.query;
  const pathString = Array.isArray(path) ? path.join('/') : (path || '');
  
  const queryString = new URLSearchParams(queryParams).toString();
  const targetUrl = `https://spocc-registration-form-backend.vercel.app/api/${pathString}${queryString ? `?${queryString}` : ''}`;

  try {
    const fetchOptions = {
      method: req.method,
      headers: {
        'content-type': req.headers['content-type'] || 'application/json',
        'accept': req.headers['accept'] || 'application/json',
      },
    };

    if (req.headers.authorization) {
      fetchOptions.headers['authorization'] = req.headers.authorization;
    }

    if (['POST', 'PUT', 'PATCH'].includes(req.method) && req.body) {
      fetchOptions.body = typeof req.body === 'string' ? req.body : JSON.stringify(req.body);
    }

    const backendRes = await fetch(targetUrl, fetchOptions);
    const data = await backendRes.json();

    return res.status(backendRes.status).json(data);
  } catch (error) {
    console.error('Vercel API Proxy Error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to connect to backend server',
      error: error.message,
    });
  }
}
