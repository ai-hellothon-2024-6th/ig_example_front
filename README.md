- https://developers.facebook.com/docs/instagram-platform/
- ssh -R 80:localhost:5173 serveo.net

```sh
# npm install -g serve
npm run build
pm2 start "serve -s ./dist -l 5000" --name ig_example_front
# pm2 delete ig_example_front && npm run build && pm2 start "serve -s ./dist -l 5000" --name ig_example_front
```