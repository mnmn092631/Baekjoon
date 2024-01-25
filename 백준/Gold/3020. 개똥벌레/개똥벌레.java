import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());

		int n = Integer.parseInt(st.nextToken());
		int h = Integer.parseInt(st.nextToken());

		float[] sArr = new float[n / 2];
		float[] jArr = new float[n / 2];

		for (int i = 0; i < n; i++) {
			int b = Integer.parseInt(br.readLine());
			if (i % 2 == 0) {
				sArr[i / 2] = b;
			} else {
				jArr[(i - 1) / 2] = h - b;
			}
		}

		Arrays.sort(sArr);
		Arrays.sort(jArr);

		int min = Integer.MAX_VALUE;
		int count = 0;

		for (float i = 0.5f; i <= h; i += 1) {
			int s = Arrays.binarySearch(sArr, i);
			if (s < 0) s = (s + 1) * -1;

			int j = Arrays.binarySearch(jArr, i);
			if (j < 0) j = (j + 1) * -1;

			int sum = sArr.length - s + j;
			if (sum < min) {
				min = sum;
				count = 1;
			} else if (min == sum) {
				count++;
			}
		}

		System.out.print(min + " " + count);
	}

}
