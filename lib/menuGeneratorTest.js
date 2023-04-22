const fs = require('fs');
const path = require('path');

const folderPath = 'content/posts';

const files = fs.readdirSync(folderPath);

const menuItems = files.map((file) => {
  return {
    label: file,
    url: `/posts/${file}`,
  };
});

const menuItemWithChildren = {
  label: 'Posts',
  url: '/posts',
  children: menuItems,
};

fs.writeFileSync('config/menu.json', JSON.stringify(menuItemWithChildren));
