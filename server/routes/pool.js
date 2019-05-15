// import uuidv4 from 'uuid/v4'; // not needed with DB
import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const pools = await req.context.models.Pool.findAll();
  return res.send(pools);
});

router.get('/:poolId', async (req, res) => {
  const pool = await req.context.models.Pool.findByPk(
    req.params.poolId,
  );
  return res.send(pool);
});

router.get('/:poolId/users', async (req, res) => {
  const pool = await req.context.models.Pool.findByPk(
    req.params.poolId,
  );

  const users = await pool.getUsers();
  return res.send(users);
});

// router.get('/:poolId/users/:userId/picks', async (req, res) => {
//   // const pool = await req.context.models.Pool.findByPk(
//   //   req.params.poolId,
//   // );

//   const picks = await req.context.models.Pool.fetchPicksByUser(req.context.models.User, req.params.userId);
//   console.log(picks)
//   // const users = await pool.getUsers();
//   return res.send(picks);
// });

// router.get('/:poolId/availableCandidates', async (req, res) => {
//   // const pool = await req.context.models.Pool.findByPk(
//   //   req.params.poolId,
//   // );

//   const pool = await Pool.availableCandidates(req.params.poolId);
//   // const users = await pool.getUsers();
//   return res.send(pool);
// });

router.post('/', async (req, res) => {
  const pool = await req.context.models.Pool.create({
    name: req.body.text,
  });

  return res.send(pool);
});

router.delete('/:poolId', async (req, res) => {
  const result = await req.context.models.Pool.destroy({
    where: { id: req.params.poolId },
  });

  return res.send(true);
});

export default router;