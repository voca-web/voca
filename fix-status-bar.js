import { Jimp } from 'jimp';
import fs from 'fs';

async function run() {
  try {
    const reference = await Jimp.read('public/feature1.jpg');
    console.log('Reference:', reference.bitmap.width, reference.bitmap.height);
    
    // Status bar height estimate: ~140px. Let's crop it.
    // The reference has a clean status bar.
    // Wait, the bezel is black, so cropping exactly the top X pixels works perfectly 
    // because the background color is the same.
    const cropHeight = 140; // You might need to adjust this depending on the image resolution.
    
    const targets = [
      'feature1-tr.jpg',
      'feature2.jpg',
      'feature2-tr.jpg',
      'feature3.jpg',
      'feature3-tr.jpg'
    ];
    
    for (const file of targets) {
      const targetPath = 'public/' + file;
      const target = await Jimp.read(targetPath);
      console.log('Processing', file, target.bitmap.width, target.bitmap.height);
      
      // composite the top 140px of reference onto the target
      // We can clone the reference, crop it, and then composite it onto target
      const statusBar = reference.clone();
      statusBar.crop({ x: 0, y: 0, w: reference.bitmap.width, h: cropHeight });
      
      target.composite(statusBar, 0, 0);
      await target.write(targetPath);
      console.log('Saved', file);
    }
  } catch (err) {
    console.error(err);
  }
}

run();
