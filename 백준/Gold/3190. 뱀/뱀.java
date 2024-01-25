import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Deque;
import java.util.LinkedList;
import java.util.StringTokenizer;

public class Main {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;
		StringBuilder sb = new StringBuilder();
		Deque<int[]> snake = new LinkedList<>();
		snake.add(new int[] { 1, 1 });
		int count = 0;

		int n = Integer.parseInt(br.readLine());
		int[][] board = new int[n + 1][n + 1];
		int k = Integer.parseInt(br.readLine());

		// 사과 위치
		for (int i = 0; i < k; i++) {
			st = new StringTokenizer(br.readLine());
			int r = Integer.parseInt(st.nextToken());
			int c = Integer.parseInt(st.nextToken());
			board[r][c] = 2;
		}

		// 이동
		int l = Integer.parseInt(br.readLine());
		int[] direct = new int[l];
		char[] arrC = new char[l];
		for (int i = 0; i < l; i++) {
			st = new StringTokenizer(br.readLine());
			int x = Integer.parseInt(st.nextToken());
			while (count < x) {
					int[] preH = snake.removeFirst();
					int a = preH[0];
					int b = preH[1];
					if(i == 0) b += 1;
					if(i != 0) {
						switch (direct[i - 1]) {
						case 1: // 상
							a -= 1;
							break;
						case 2: // 하
							a += 1;
							break;
						case 3: // 좌
							b -= 1;
							break;
						case 4: // 우
							b += 1;
							break;
						}
					}
					if (a > n || b > n || a == 0 || b == 0) {
						sb.append(count + 1);
						System.out.print(sb);
						return;
					}
					if (board[a][b] == 1) {
						sb.append(count + 1);
						System.out.print(sb);
						return;
					}
					if (board[a][b] == 2) {
						snake.addFirst(preH);
					}
					if (board[a][b] == 0) {
						if(snake.size() > 0) {
							int[] preT = snake.removeLast();
							board[preT[0]][preT[1]] = 0;
							snake.addFirst(preH);
						}
						else board[preH[0]][preH[1]] = 0;
					}
					board[a][b] = 1;
					snake.addFirst(new int[] { a, b });
					count++;
			}

			// 방향 회전
			char c = st.nextToken().charAt(0);
			// 1: 상 2: 하 3: 좌 4: 우
			if (i == 0) {
				if (c == 'D') direct[i] = 2;
				else direct[i] = 1;
				arrC[i] = c;
			} else {
				// 짝수일 경우 -> 1 또는 2
				if (i % 2 == 0) {
					// 바로 전이 좌
					if (direct[i - 1] == 3) {
						if (c == 'D') direct[i] = 1;
						else direct[i] = 2;
						arrC[i] = c;
					}
					// 바로 전이 우
					else {
						if (c == 'D') direct[i] = 2;
						else direct[i] = 1;
						arrC[i] = c;
					}
				}
				// 홀수인 경우 -> 3 또는 4
				else {
					// 바로 전이 상
					if (direct[i - 1] == 1) {
						if (c == 'D') direct[i] = 4;
						else direct[i] = 3;
						arrC[i] = c;
					}
					// 바로 전이 하
					else {
						if (c == 'D') direct[i] = 3;
						else direct[i] = 4;
						arrC[i] = c;
					}
				}
			}
		}
			while(true) {
				int[] preH = snake.removeFirst();
				int a = preH[0];
				int b = preH[1];
					switch (direct[direct.length - 1]) {
					case 1: // 상
						a -= 1;
						break;
					case 2: // 하
						a += 1;
						break;
					case 3: // 좌
						b -= 1;
						break;
					case 4: // 우
						b += 1;
						break;
					}
					if (a > n || b > n || a == 0 || b == 0) {
						sb.append(count + 1);
						break;
					}
					if (board[a][b] == 1) {
						sb.append(count + 1);
						break;
					}
					if (board[a][b] == 2) {
						snake.addFirst(preH);
					}
					if (board[a][b] == 0) {
						if(snake.size() > 0) {
							int[] preT = snake.removeLast();
							board[preT[0]][preT[1]] = 0;
							snake.addFirst(preH);
						}
						else board[preH[0]][preH[1]] = 0;
					}
					board[a][b] = 1;
					snake.addFirst(new int[] { a, b });
					count++;
				}
		System.out.print(sb);
	}
}
