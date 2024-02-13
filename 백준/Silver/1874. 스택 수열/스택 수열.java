import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();

		int n = Integer.parseInt(br.readLine());

		int[] arr = new int[n];
		int idx = 0;
		int max = 0;

		for (int i = 0; i < n; i++) {
			int num = Integer.parseInt(br.readLine());

			if (num > max) {
				for (int j = max + 1; j < num; j++) {
					arr[j - 1] = idx++;
					sb.append("+").append("\n");
				}
				sb.append("+").append("\n").append("-").append("\n");
				max = num;
				continue;
			}

			if (arr[num - 1] != idx - 1) {
				System.out.print("NO");
				return;
			}
			
			sb.append("-").append("\n");
			idx--;

		}
		
		System.out.print(sb);
	}

}