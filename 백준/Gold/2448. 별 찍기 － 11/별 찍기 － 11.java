import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
	public static char[][] arr;

	public static void star(int r, int c, int n) {
		if (n == 3) {
			arr[r][c] = '*';
			arr[r + 1][c + 1] = arr[r + 1][c - 1] = '*';
			arr[r + 2][c - 2] = arr[r + 2][c - 1] = arr[r + 2][c] = arr[r + 2][c + 1] = arr[r + 2][c + 2] = '*';
		} else {
			star(r, c, n / 2);
			star(r + n / 2, c - n / 2, n / 2);
			star(r + n / 2, c + n / 2, n / 2);
		}
	}

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		
		int n = Integer.parseInt(br.readLine());
		arr = new char[n][2 * n - 1];
		
		star(0, n - 1, n);

		for (char[] r : arr) {
			for (char c : r) {
				if(c == '*') sb.append("*");
				else sb.append(" ");
			}
			sb.append("\n");
		}
		
		System.out.print(sb);
	}

}
