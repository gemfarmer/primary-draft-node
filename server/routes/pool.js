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

router.post('/', async (req, res) => {
  const pool = await req.context.models.Pool.create({
    name: req.body.text,
  });

  return res.send(message);
});

router.delete('/:poolId', async (req, res) => {
  const result = await req.context.models.Pool.destroy({
    where: { id: req.params.poolId },
  });

  return res.send(true);
});

export default router;