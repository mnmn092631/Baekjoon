import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
	public static StringBuilder sb = new StringBuilder();

	public static void Hanoi(int num, int from, int mid, int to) {
		if (num == 1) {
			sb.append(from).append(" ").append(to).append("\n");
		} else {
			Hanoi(num - 1, from, to, mid);
			sb.append(from).append(" ").append(to).append("\n");
			Hanoi(num - 1, mid, from, to);
		}
	}

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		int n = Integer.parseInt(br.readLine());

		sb.append((int) Math.pow(2, n) - 1).append("\n");
		Hanoi(n, 1, 2, 3);

		System.out.print(sb);
	}

}
