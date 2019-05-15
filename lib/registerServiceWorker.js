"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = register;
exports.unregister = unregister;
// tslint:disable:no-console
// In production, we register a service worker to serve assets from local cache.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on the 'N+1' visit to a page, since previously
// cached resources are updated in the background.
// To learn more about the benefits of this model, read https://goo.gl/KwvDNy.
// This link also includes instructions on opting out of this behavior.
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));

function register() {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    // The URL constructor is available in all browsers that support SW.
    var publicUrl = new URL(process.env.PUBLIC_URL, window.location.toString());

    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebookincubator/create-react-app/issues/2374
      return;
    }

    window.addEventListener('load', function () {
      var swUrl = "".concat(process.env.PUBLIC_URL, "/service-worker.js");

      if (isLocalhost) {
        // This is running on localhost. Lets check if a service worker still exists or not.
        checkValidServiceWorker(swUrl); // Add some additional logging to localhost, pointing developers to the
        // service worker/PWA documentation.

        navigator.serviceWorker.ready.then(function () {
          console.log('This web app is being served cache-first by a service ' + 'worker. To learn more, visit https://goo.gl/SC7cgQ');
        });
      } else {
        // Is not local host. Just register service worker
        registerValidSW(swUrl);
      }
    });
  }
}

function registerValidSW(swUrl) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      if (installingWorker) {
        installingWorker.onstatechange = function () {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              // At this point, the old content will have been purged and
              // the fresh content will have been added to the cache.
              // It's the perfect time to display a 'New content is
              // available; please refresh.' message in your web app.
              console.log('New content is available; please refresh.');
            } else {
              // At this point, everything has been precached.
              // It's the perfect time to display a
              // 'Content is cached for offline use.' message.
              console.log('Content is cached for offline use.');
            }
          }
        };
      }
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    if (response.status === 404 || response.headers.get('content-type').indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWdpc3RlclNlcnZpY2VXb3JrZXIudHMiXSwibmFtZXMiOlsiaXNMb2NhbGhvc3QiLCJCb29sZWFuIiwid2luZG93IiwibG9jYXRpb24iLCJob3N0bmFtZSIsIm1hdGNoIiwicmVnaXN0ZXIiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJuYXZpZ2F0b3IiLCJwdWJsaWNVcmwiLCJVUkwiLCJQVUJMSUNfVVJMIiwidG9TdHJpbmciLCJvcmlnaW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3dVcmwiLCJjaGVja1ZhbGlkU2VydmljZVdvcmtlciIsInNlcnZpY2VXb3JrZXIiLCJyZWFkeSIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwicmVnaXN0ZXJWYWxpZFNXIiwicmVnaXN0cmF0aW9uIiwib251cGRhdGVmb3VuZCIsImluc3RhbGxpbmdXb3JrZXIiLCJpbnN0YWxsaW5nIiwib25zdGF0ZWNoYW5nZSIsInN0YXRlIiwiY29udHJvbGxlciIsImNhdGNoIiwiZXJyb3IiLCJmZXRjaCIsInJlc3BvbnNlIiwic3RhdHVzIiwiaGVhZGVycyIsImdldCIsImluZGV4T2YiLCJ1bnJlZ2lzdGVyIiwicmVsb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBR0MsT0FBTyxDQUN6QkMsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxRQUFoQixLQUE2QixXQUE3QixJQUNFO0FBQ0FGLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsUUFBaEIsS0FBNkIsT0FGL0IsSUFHRTtBQUNBRixNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLFFBQWhCLENBQXlCQyxLQUF6QixDQUNFLHdEQURGLENBTHVCLENBQTNCOztBQVVlLFNBQVNDLFFBQVQsR0FBb0I7QUFDakMsTUFBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFFBQVosS0FBeUIsWUFBekIsSUFBeUMsbUJBQW1CQyxTQUFoRSxF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QUFNO0FBQ1hWLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUNFLCtEQURGO0FBR0QsR0F0Qkg7QUF1QkQ7O0FBRU0sU0FBU2lCLFVBQVQsR0FBc0I7QUFDM0IsTUFBSSxtQkFBbUI5QixTQUF2QixFQUFrQztBQUNoQ0EsSUFBQUEsU0FBUyxDQUFDUyxhQUFWLENBQXdCQyxLQUF4QixDQUE4QkMsSUFBOUIsQ0FBbUMsVUFBQUksWUFBWSxFQUFJO0FBQ2pEQSxNQUFBQSxZQUFZLENBQUNlLFVBQWI7QUFDRCxLQUZEO0FBR0Q7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbi8vIEluIHByb2R1Y3Rpb24sIHdlIHJlZ2lzdGVyIGEgc2VydmljZSB3b3JrZXIgdG8gc2VydmUgYXNzZXRzIGZyb20gbG9jYWwgY2FjaGUuXG5cbi8vIFRoaXMgbGV0cyB0aGUgYXBwIGxvYWQgZmFzdGVyIG9uIHN1YnNlcXVlbnQgdmlzaXRzIGluIHByb2R1Y3Rpb24sIGFuZCBnaXZlc1xuLy8gaXQgb2ZmbGluZSBjYXBhYmlsaXRpZXMuIEhvd2V2ZXIsIGl0IGFsc28gbWVhbnMgdGhhdCBkZXZlbG9wZXJzIChhbmQgdXNlcnMpXG4vLyB3aWxsIG9ubHkgc2VlIGRlcGxveWVkIHVwZGF0ZXMgb24gdGhlICdOKzEnIHZpc2l0IHRvIGEgcGFnZSwgc2luY2UgcHJldmlvdXNseVxuLy8gY2FjaGVkIHJlc291cmNlcyBhcmUgdXBkYXRlZCBpbiB0aGUgYmFja2dyb3VuZC5cblxuLy8gVG8gbGVhcm4gbW9yZSBhYm91dCB0aGUgYmVuZWZpdHMgb2YgdGhpcyBtb2RlbCwgcmVhZCBodHRwczovL2dvby5nbC9Ld3ZETnkuXG4vLyBUaGlzIGxpbmsgYWxzbyBpbmNsdWRlcyBpbnN0cnVjdGlvbnMgb24gb3B0aW5nIG91dCBvZiB0aGlzIGJlaGF2aW9yLlxuXG5jb25zdCBpc0xvY2FsaG9zdCA9IEJvb2xlYW4oXG4gIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA9PT0gJ2xvY2FsaG9zdCcgfHxcbiAgICAvLyBbOjoxXSBpcyB0aGUgSVB2NiBsb2NhbGhvc3QgYWRkcmVzcy5cbiAgICB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgPT09ICdbOjoxXScgfHxcbiAgICAvLyAxMjcuMC4wLjEvOCBpcyBjb25zaWRlcmVkIGxvY2FsaG9zdCBmb3IgSVB2NC5cbiAgICB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUubWF0Y2goXG4gICAgICAvXjEyNyg/OlxcLig/OjI1WzAtNV18MlswLTRdWzAtOV18WzAxXT9bMC05XVswLTldPykpezN9JC9cbiAgICApXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWdpc3RlcigpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xuICAgIC8vIFRoZSBVUkwgY29uc3RydWN0b3IgaXMgYXZhaWxhYmxlIGluIGFsbCBicm93c2VycyB0aGF0IHN1cHBvcnQgU1cuXG4gICAgY29uc3QgcHVibGljVXJsID0gbmV3IFVSTChcbiAgICAgIHByb2Nlc3MuZW52LlBVQkxJQ19VUkwhLFxuICAgICAgd2luZG93LmxvY2F0aW9uLnRvU3RyaW5nKClcbiAgICApO1xuICAgIGlmIChwdWJsaWNVcmwub3JpZ2luICE9PSB3aW5kb3cubG9jYXRpb24ub3JpZ2luKSB7XG4gICAgICAvLyBPdXIgc2VydmljZSB3b3JrZXIgd29uJ3Qgd29yayBpZiBQVUJMSUNfVVJMIGlzIG9uIGEgZGlmZmVyZW50IG9yaWdpblxuICAgICAgLy8gZnJvbSB3aGF0IG91ciBwYWdlIGlzIHNlcnZlZCBvbi4gVGhpcyBtaWdodCBoYXBwZW4gaWYgYSBDRE4gaXMgdXNlZCB0b1xuICAgICAgLy8gc2VydmUgYXNzZXRzOyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29raW5jdWJhdG9yL2NyZWF0ZS1yZWFjdC1hcHAvaXNzdWVzLzIzNzRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgIGNvbnN0IHN3VXJsID0gYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vc2VydmljZS13b3JrZXIuanNgO1xuXG4gICAgICBpZiAoaXNMb2NhbGhvc3QpIHtcbiAgICAgICAgLy8gVGhpcyBpcyBydW5uaW5nIG9uIGxvY2FsaG9zdC4gTGV0cyBjaGVjayBpZiBhIHNlcnZpY2Ugd29ya2VyIHN0aWxsIGV4aXN0cyBvciBub3QuXG4gICAgICAgIGNoZWNrVmFsaWRTZXJ2aWNlV29ya2VyKHN3VXJsKTtcblxuICAgICAgICAvLyBBZGQgc29tZSBhZGRpdGlvbmFsIGxvZ2dpbmcgdG8gbG9jYWxob3N0LCBwb2ludGluZyBkZXZlbG9wZXJzIHRvIHRoZVxuICAgICAgICAvLyBzZXJ2aWNlIHdvcmtlci9QV0EgZG9jdW1lbnRhdGlvbi5cbiAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVhZHkudGhlbigoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAnVGhpcyB3ZWIgYXBwIGlzIGJlaW5nIHNlcnZlZCBjYWNoZS1maXJzdCBieSBhIHNlcnZpY2UgJyArXG4gICAgICAgICAgICAgICd3b3JrZXIuIFRvIGxlYXJuIG1vcmUsIHZpc2l0IGh0dHBzOi8vZ29vLmdsL1NDN2NnUSdcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElzIG5vdCBsb2NhbCBob3N0LiBKdXN0IHJlZ2lzdGVyIHNlcnZpY2Ugd29ya2VyXG4gICAgICAgIHJlZ2lzdGVyVmFsaWRTVyhzd1VybCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJWYWxpZFNXKHN3VXJsOiBzdHJpbmcpIHtcbiAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXJcbiAgICAucmVnaXN0ZXIoc3dVcmwpXG4gICAgLnRoZW4ocmVnaXN0cmF0aW9uID0+IHtcbiAgICAgIHJlZ2lzdHJhdGlvbi5vbnVwZGF0ZWZvdW5kID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBpbnN0YWxsaW5nV29ya2VyID0gcmVnaXN0cmF0aW9uLmluc3RhbGxpbmc7XG4gICAgICAgIGlmIChpbnN0YWxsaW5nV29ya2VyKSB7XG4gICAgICAgICAgaW5zdGFsbGluZ1dvcmtlci5vbnN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGluc3RhbGxpbmdXb3JrZXIuc3RhdGUgPT09ICdpbnN0YWxsZWQnKSB7XG4gICAgICAgICAgICAgIGlmIChuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5jb250cm9sbGVyKSB7XG4gICAgICAgICAgICAgICAgLy8gQXQgdGhpcyBwb2ludCwgdGhlIG9sZCBjb250ZW50IHdpbGwgaGF2ZSBiZWVuIHB1cmdlZCBhbmRcbiAgICAgICAgICAgICAgICAvLyB0aGUgZnJlc2ggY29udGVudCB3aWxsIGhhdmUgYmVlbiBhZGRlZCB0byB0aGUgY2FjaGUuXG4gICAgICAgICAgICAgICAgLy8gSXQncyB0aGUgcGVyZmVjdCB0aW1lIHRvIGRpc3BsYXkgYSAnTmV3IGNvbnRlbnQgaXNcbiAgICAgICAgICAgICAgICAvLyBhdmFpbGFibGU7IHBsZWFzZSByZWZyZXNoLicgbWVzc2FnZSBpbiB5b3VyIHdlYiBhcHAuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05ldyBjb250ZW50IGlzIGF2YWlsYWJsZTsgcGxlYXNlIHJlZnJlc2guJyk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gQXQgdGhpcyBwb2ludCwgZXZlcnl0aGluZyBoYXMgYmVlbiBwcmVjYWNoZWQuXG4gICAgICAgICAgICAgICAgLy8gSXQncyB0aGUgcGVyZmVjdCB0aW1lIHRvIGRpc3BsYXkgYVxuICAgICAgICAgICAgICAgIC8vICdDb250ZW50IGlzIGNhY2hlZCBmb3Igb2ZmbGluZSB1c2UuJyBtZXNzYWdlLlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb250ZW50IGlzIGNhY2hlZCBmb3Igb2ZmbGluZSB1c2UuJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGR1cmluZyBzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb246JywgZXJyb3IpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjaGVja1ZhbGlkU2VydmljZVdvcmtlcihzd1VybDogc3RyaW5nKSB7XG4gIC8vIENoZWNrIGlmIHRoZSBzZXJ2aWNlIHdvcmtlciBjYW4gYmUgZm91bmQuIElmIGl0IGNhbid0IHJlbG9hZCB0aGUgcGFnZS5cbiAgZmV0Y2goc3dVcmwpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgLy8gRW5zdXJlIHNlcnZpY2Ugd29ya2VyIGV4aXN0cywgYW5kIHRoYXQgd2UgcmVhbGx5IGFyZSBnZXR0aW5nIGEgSlMgZmlsZS5cbiAgICAgIGlmIChcbiAgICAgICAgcmVzcG9uc2Uuc3RhdHVzID09PSA0MDQgfHxcbiAgICAgICAgcmVzcG9uc2UuaGVhZGVycy5nZXQoJ2NvbnRlbnQtdHlwZScpIS5pbmRleE9mKCdqYXZhc2NyaXB0JykgPT09IC0xXG4gICAgICApIHtcbiAgICAgICAgLy8gTm8gc2VydmljZSB3b3JrZXIgZm91bmQuIFByb2JhYmx5IGEgZGlmZmVyZW50IGFwcC4gUmVsb2FkIHRoZSBwYWdlLlxuICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWFkeS50aGVuKHJlZ2lzdHJhdGlvbiA9PiB7XG4gICAgICAgICAgcmVnaXN0cmF0aW9uLnVucmVnaXN0ZXIoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBTZXJ2aWNlIHdvcmtlciBmb3VuZC4gUHJvY2VlZCBhcyBub3JtYWwuXG4gICAgICAgIHJlZ2lzdGVyVmFsaWRTVyhzd1VybCk7XG4gICAgICB9XG4gICAgfSlcbiAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICdObyBpbnRlcm5ldCBjb25uZWN0aW9uIGZvdW5kLiBBcHAgaXMgcnVubmluZyBpbiBvZmZsaW5lIG1vZGUuJ1xuICAgICAgKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVucmVnaXN0ZXIoKSB7XG4gIGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVhZHkudGhlbihyZWdpc3RyYXRpb24gPT4ge1xuICAgICAgcmVnaXN0cmF0aW9uLnVucmVnaXN0ZXIoKTtcbiAgICB9KTtcbiAgfVxufVxuIl19