import { Router, Request, Response } from 'express';

const router = Router();

router.get('/mensajes', (req: Request, res: Response) => {
  res.json({
    ok: true,
    mensaje: 'OK!!!',
  });
});
router.post('/mensajes', (req: Request, res: Response) => {
  const param1 = req.body.param1;
  const param2 = req.body.param2;

  res.json({
    ok: true,
    param1,
    param2,
  });
});
router.post('/mensajes/:id', (req: Request, res: Response) => {
  const param1 = req.body.param1;
  const param2 = req.body.param2;
  const id = req.params.id;

  res.json({
    ok: true,
    param1,
    param2,
    id,
  });
});

export default router;
