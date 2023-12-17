SELECT
  p.name,
  t.type,
  m.move
FROM
  pokemon p
INNER JOIN
  type t
ON
  p.type_id = t.id
INNER JOIN
  moves m
ON
  p.id = m.pokemon_id
WHERE
  t.type = 'Water'
ORDER BY
  p.name

/*----------------------------------------------------------------------------*/

SELECT
  p.name,
  COUNT(m.move) AS num_moves
FROM
  pokemon p
INNER JOIN
  moves m
ON
  p.id = m.pokemon_id
GROUP BY
  p.name
ORDER BY
  num_moves DESC

/*----------------------------------------------------------------------------*/

SELECT
  p.name,
  COUNT(m.move) AS num_moves,
  AVG(m.power) AS avg_power
FROM
  pokemon p
INNER JOIN
  moves m
ON
  p.id = m.pokemon_id
GROUP BY
  p.name
ORDER BY
  num_moves DESC

/*----------------------------------------------------------------------------*/

SELECT
  p.name,
  t.type,
  m.move,
  m.power
FROM
  pokemon p
INNER JOIN
  type t
ON
  p.type_id = t.id
INNER JOIN
  moves m
ON
  p.id = m.pokemon_id
WHERE
  m.power > 100
ORDER BY
  m.power DESC

/*----------------------------------------------------------------------------*/

SELECT
  p.name,
  t.type,
  m.move,
  m.power
FROM
  pokemon p
INNER JOIN
  type t
ON
  p.type_id = t.id
INNER JOIN
  moves m
ON
  p.id = m.pokemon_id
WHERE
  t.type IN ('Fire', 'Water', 'Electric')
ORDER BY
  m.power DESC

/*----------------------------------------------------------------------------*/