import React, {useState, useEffect, useCallback} from 'react';
import {Text, View, ImageBackground, Alert} from 'react-native';

import Cell from '../../components/cell';
import bg from '../../assets/bg.jpeg';
import Button from '../../components/button';
import styles from './styles';

interface Position {
  row: number;
  col: number;
}

const rows = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

const Home: React.FC = ({navigation}) => {
  const [map, setMap] = useState<string[][]>(rows);
  const [currentTurn, setCurrentTurn] = useState<'x' | 'o'>('x');
  const [activeGame, setActiveGame] = useState(false);
  const [score, setScore] = useState<{x: number; o: number}>({x: 0, o: 0});

  const onPress = useCallback(
    (rowIndex: number, columnIndex: number) => {
      if (map[rowIndex][columnIndex] !== '') {
        Alert.alert('Not Available');
        return;
      }

      setMap(existingMap => {
        const updatedMap = existingMap.map((row, i) =>
          i === rowIndex
            ? row.map((cell, j) => (j === columnIndex ? currentTurn : cell))
            : row,
        );

        setCurrentTurn(currentTurn === 'x' ? 'o' : 'x');

        return updatedMap;
      });
    },
    [map, currentTurn],
  );

  const botTurn = useCallback(() => {
    // possible options
    const possiblePositions: Position[] = [];
    map.forEach((row, rowIndex) => {
      row.forEach((cell, columnIndex) => {
        if (cell === '') {
          possiblePositions.push({row: rowIndex, col: columnIndex});
        }
      });
    });

    let chosenOption: Position | undefined;

    // Choose random
    if (!chosenOption) {
      chosenOption =
        possiblePositions[Math.floor(Math.random() * possiblePositions.length)];
    }

    if (chosenOption) {
      onPress(chosenOption.row, chosenOption.col);
    }
  }, [map, onPress]);

  const getWinner = (winnerMap: string[][]) => {
    // Check rows, columns, and diagonals for a winner

    // Check rows
    for (let row = 0; row < 3; row++) {
      if (
        winnerMap[row][0] !== '' &&
        winnerMap[row][0] === winnerMap[row][1] &&
        winnerMap[row][0] === winnerMap[row][2]
      ) {
        return winnerMap[row][0];
      }
    }

    // Check columns
    for (let col = 0; col < 3; col++) {
      if (
        winnerMap[0][col] !== '' &&
        winnerMap[0][col] === winnerMap[1][col] &&
        winnerMap[0][col] === winnerMap[2][col]
      ) {
        return winnerMap[0][col];
      }
    }

    // Check diagonals
    if (
      winnerMap[0][0] !== '' &&
      winnerMap[0][0] === winnerMap[1][1] &&
      winnerMap[0][0] === winnerMap[2][2]
    ) {
      return winnerMap[0][0];
    }
    if (
      winnerMap[0][2] !== '' &&
      winnerMap[0][2] === winnerMap[1][1] &&
      winnerMap[0][2] === winnerMap[2][0]
    ) {
      return winnerMap[0][2];
    }

    // If there is no winner
    return null;
  };

  const resetGame = useCallback(() => {
    setMap(rows);
    setCurrentTurn('x');
    setActiveGame(false);
  }, []);

  const gameWon = useCallback(
    (player: 'x' | 'o') => {
      Alert.alert(`Player ${player} won`, 'Congratulations', [
        {
          text: 'Restart',
          onPress: () => {
            setScore(prevScore => ({
              ...prevScore,
              [player]: prevScore[player] + 1,
            }));
            resetGame();
          },
        },
      ]);
    },
    [resetGame],
  );

  const tiedGame = useCallback(() => {
    if (!map.some(row => row.some(cell => cell === ''))) {
      Alert.alert("It's a tie", 'Tie', [
        {
          text: 'Restart',
          onPress: resetGame,
        },
      ]);
    }
  }, [map, resetGame]);

  useEffect(() => {
    if (currentTurn === 'o' && activeGame) {
      botTurn();
    }
  }, [currentTurn, botTurn, activeGame]);

  useEffect(() => {
    const winner = getWinner(map);
    if (winner) {
      console.log(winner);
      gameWon(winner);
    } else {
      tiedGame();
    }
  }, [map, gameWon, tiedGame]);

  return (
    <View>
      <ImageBackground source={bg} style={styles.bg} resizeMode="contain">
        <Text style={styles.turnText}>
          Current Turn: {currentTurn.toUpperCase()}
        </Text>
        <View style={styles.map}>
          {map.map((row, rowIndex) => (
            <View key={`row-${rowIndex}`} style={styles.row}>
              {row.map((cell, columnIndex) => (
                <Cell
                  key={`row-${rowIndex}-col-${columnIndex}`}
                  cell={cell}
                  onPress={() => onPress(rowIndex, columnIndex)}
                  disabled={!activeGame}
                />
              ))}
            </View>
          ))}
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => setActiveGame(true)}
            text="Start"
            disabled={activeGame}
          />
          <Button
            onPress={() => navigation.navigate('Score', {score})}
            text="Score"
            disabled={activeGame}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;
