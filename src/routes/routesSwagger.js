/**
 * @swagger
 * /api/student/{id}:
 *   get:
 *     tags:
 *      - "students"
 *     description: return Student Information.
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        type: number
 *     responses:
 *       200:
 *         description: Successful operation
 */
router.get("/:id", studentController.execute);