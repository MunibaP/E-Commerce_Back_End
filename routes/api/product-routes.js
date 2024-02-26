const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products and its associated Category and Tag data
router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [{model: Category}, {model: Tag}],
    });
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({message: 'Product Not Found!'});
  }
});

// get one product and its associated Category and Tag data
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: [{model: Category}, {model: Tag}],
    });
    !product
    ?res.status(404).json({message: 'Product Not Found!'})
    :res.status(200).json(product);
  } catch (err) {
    res.status(500).json({message: 'Product Not Found!'});
  }
});

// create new product
router.post('/', (req, res) => {
  /* req.body should look like this...
    {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
  */
  Product.create(req.body)
    .then((product) => {
      // if there's product tags, we need to create pairings to bulk create in the ProductTag model
      if (req.body.tagIds.length) {
        const productTagIdArr = req.body.tagIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id,
          };
        });
        return ProductTag.bulkCreate(productTagIdArr);
      }
      // if no product tags, just respond
      res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// // update product
// router.put('/:id', (req, res) => {
//   // update product data
//   Product.update(req.body, {
//     where: {
//       id: req.params.id,
//     },
//   })
//     .then((product) => {
//       if (req.body.tagIds && req.body.tagIds.length) {
        
//         ProductTag.findAll({
//           where: { product_id: req.params.id }
//         }).then((productTags) => {
//           // create filtered list of new tag_ids
//           const productTagIds = productTags.map(({ tag_id }) => tag_id);
//           const newProductTags = req.body.tagIds
//           .filter((tag_id) => !productTagIds.includes(tag_id))
//           .map((tag_id) => {
//             return {
//               product_id: req.params.id,
//               tag_id,
//             };
//           });

//             // figure out which ones to remove
//           const productTagsToRemove = productTags
//           .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
//           .map(({ id }) => id);
//                   // run both actions
//           return Promise.all([
//             ProductTag.destroy({ where: { id: productTagsToRemove } }),
//             ProductTag.bulkCreate(newProductTags),
//           ]);
//         });
//       }

//       return res.json(product);
//     })
//     .catch((err) => {
//       // console.log(err);
//       res.status(400).json(err);
//     });
// });

// Function to update a product
router.put("/:id", async(req, res) => {
  try {
    await Product.update(req.body, {where: {id: req.params.id}});

    // Checking if there are tags in the request body, then retrieve existing product tags and extract their IDs.
    if(req.body.tags && req.body.tags.length > 0) {
      const productTags = await productTags.findAll({where: {product_id: req.params.id}});
      const productTagIds = productTags.map(({tag_id}) => tag_id);

      // Generating new product tags from the request body, excluding existing tag IDs.
      const newProductTags = req.body.tags
      .filter((tag_id) => !productTagIds.includes(tag_id))
      .map((tag_id) => {
        return {
          product_id: req.params.id,
          tag_id,
        }
      });

      // Remove outdated product tags and create new ones in bulk.
      const productTagsToRemove = productTags
      .filter(({tag_id}) => !req.body.tags.includes(tag_id))
      .map(({id}) => id);

      await Promise.all([
        ProductTag.destroy({where: {id: productTagsToRemove}}),
        productTag.bulkCreate(newProductTags),
      ]);
    }

    // Fetch and return product details with associated tags, and handling errors.
    const product = await Product.findByPk(req.params.id, {include: [{model: Tag}]});
    return res.json(product);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

// Function to delete a product by id
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Product.destroy({where: {id: req.params.id}});
    !deleted
    ? res.status(404).json({message: 'id Not Found!'})
    : res.status(200).json(deleted);
  } catch (err) {
    res.status(500).json({message: 'Fail to delete the product!', error: err});
  }
});

module.exports = router;
