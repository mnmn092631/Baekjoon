import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();

		int n = Integer.parseInt(br.readLine());
		int[] arr = new int[n];
		int[] result = new int[n];

		StringTokenizer st = new StringTokenizer(br.readLine());
		arr[0] = Integer.parseInt(st.nextToken());
		for (int i = 1; i < n; i++) {
			arr[i] = Integer.parseInt(st.nextToken());

			if (arr[i] < arr[i - 1]) {
				result[i] = i;
				continue;
			}

			for (int j = i - 1; result[j] != 0; j--) {
				if (arr[result[j] - 1] > arr[i]) {
					result[i] = result[j];
					break;
				}
			}
		}

		for (int num : result) {
			sb.append(num).append(" ");
		}

		System.out.print(sb);
	}
}
