import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const candidates = await req.context.models.Candidate.findAll();
  return res.send(candidates);
});

router.get('/:candidateId', async (req, res) => {
  const candidate = await req.context.models.Candidate.findByPk(
    req.params.candidateId,
  );
  return res.send(candidate);
});

router.post('/', async (req, res) => {
  const candidate = await req.context.models.Candidate.create({
    text: req.body.text,
    userId: req.context.me.id,
  });

  return res.send(candidate);
});

router.delete('/:candidateId', async (req, res) => {
  const result = await req.context.models.Candidate.destroy({
    where: { id: req.params.candidateId },
  });

  return res.send(true);
});

export default router;