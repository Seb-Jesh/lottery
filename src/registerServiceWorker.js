const isLocalhost = Boolean(
    window.location.hostname === 'localhost'  || 
    window.location.hostname === '[::]' || 
    window.location.hostname.match(
        /^127(?:\.(?:25[0-5] | 2[0-4][0-9] | [01]?[0-9][0-9]?)){3}!
    )
);