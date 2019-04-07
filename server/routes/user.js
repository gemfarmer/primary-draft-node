import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const users = await req.context.models.User.findAll();
  return res.send(users);
});

router.get('/:userId', async (req, res) => {
  // console.log(req.params.userId)
  const user = await req.context.models.User.findById(
    req.params.userId,
  );
  return res.send(user);
});

router.post('/:userId/addToPool/:poolId', async (req, res) => {
  // await console.log(req.context.models.User)
  // const user = await req.context.models.User.findById(
  //   req.params.userId,
  // );
  // console.log(user)
  // console.log(req.params.poolId)
  // user.update({ poolId: req.params.poolId })
  // return res.send(user);
});

export default router;