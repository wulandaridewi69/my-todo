const path = require('path');
 
module.exports = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}